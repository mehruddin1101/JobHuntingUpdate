'use client'
import React from 'react';
import Head from 'next/head'; // Import Head for SEO and metadata
import Links from "../../components/links/links";
import { useEffect, useState } from "react";
import Content from "../page";

const Jobs = ({params}:{
  params : {jobid:string}
}) => {
 
  const Jobid = params.jobid;
 
  const [singlejob, setSingleJob] = useState([]); 
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
        <Content data={singlejob} />
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
