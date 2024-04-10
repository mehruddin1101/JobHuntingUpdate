'use client'
import React from 'react';
import Head from 'next/head'; // Import Head for SEO and metadata
import Links from "../../components/links/links";
import { useEffect, useState } from "react";
import Content from "../page";

interface JobData {
  jobId: string;
  postTitle: string;
  jobTitle: string;
  organizationName: string;
  organizationWebsite: string;
  aboutOrganization: string;
  jobRole: string;
  qualification: string;
  experience: string;
  batch: string;
  salary: string;
  jobLocation: string;
  lastApplyDate: string;
  job_Description: string;
  appyInstructions: string;
  appyLink: string;
  whatsAppGroupLink: string;
  telegramGroupLink: string;
  instagramLink: string;
  linkedInLink: string;
  short_Description: string;
  long_Description: string;
  coverPhoto: string;
  cardPhoto: string;
  logo: string | null;
  remarks: string;
  statusId: number;
  categoryId: number;
  statusUpdatedBy: string | null;
  statusUpdatedDate: string | null;
  categoryMaster: any;
  statusMaster: {
    statusId: number;
    name: string;
    isActive: boolean;
    isDeleted: boolean;
    createdBy: string | null;
    createdDate: string;
    modifiedBy: string | null;
    modifiedDate: string | null;
  };
  id: number;
  isActive: boolean;
  isDeleted: boolean;
  createdBy: string | null;
  createdDate: string;
  modifiedBy: string | null;
  modifiedDate: string | null;
  ipaddress: string | null;
  browser: string | null;
}

const Jobs = ({params}:{
  params : {jobid:string}
}) => {
  const Jobid = params.jobid;
 
  const [singlejob, setSingleJob] = useState<JobData | null>(null);

  const [loading, setLoading] = useState(false)

  const GetSinglejOb = async () =>  {
    try {
    
      const response = await fetch(`https://developnators.azurewebsites.net/api/JobHunting/GetJobWeb/${Jobid}`);
      if (!response.ok) {
        throw new Error('Failed to fetch jobs');
      }
      const data = await response.json();
      setSingleJob(data)
      setLoading(false)
      console.log("data is ", data)
    } catch (error) {
      console.error('Error fetching jobs:', error);
      return null; 
    }
  }
  useEffect(()=>{
    GetSinglejOb()
  },[])
 
  const [shouldApplyStyle, setShouldApplyStyle] = useState(false);

  useEffect(() => {
 
    const checkWindowWidth = () => {
      setShouldApplyStyle(window.innerWidth > 520);
    };

   
    checkWindowWidth();

   
    window.addEventListener('resize', checkWindowWidth);

    
    return () => {
      window.removeEventListener('resize', checkWindowWidth);
    };
  }, []); 



  return (
    <>
      <Head>
        <title>Jobs Page</title> 
        <meta name="description" content="Your job listings page description" />  
      </Head>

      <div style={{ display: "flex" }} className="link-content" data-theme="light">
        {/* Content (80%) */}
        <div style={{ flex: "1", marginRight: shouldApplyStyle ? "20px" : 0 }} className="container">
        {singlejob && <Content data={singlejob} />}
        </div>

      
        {shouldApplyStyle ? (
          <div style={{ flex: "0 0 30%", maxWidth: "100%" }}>
            <Links />
          </div>
        ) : (
          <Links />
        )}
      </div>

     
      <style jsx>{`
        @media only screen and (max-width: 768px) {
          .link-content > div:first-child {
            margin-right: 0;
          }
        }
      `}</style>
    </>
  );
};

export default Jobs;
