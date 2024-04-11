'use client'
import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head'; // Import Head for SEO and metadata
import Links from "../../components/links/links";

import JobSummary from '@/app/components/jobcomponents/jobSummary';
import HiringDetails from '@/app/components/jobcomponents/HiringDetails';
import Role from '@/app/components/jobcomponents/Role';
import Responsibility from '@/app/components/jobcomponents/Responsibilities';
import Qualification from '@/app/components/jobcomponents/Qualification';
import SkillRequirement from '@/app/components/jobcomponents/SkillRequirement';
import Designation from '@/app/components/jobcomponents/Designation';
import HowToApply from '@/app/components/jobcomponents/HowtoApply';
import ApplyLink from '@/app/components/jobcomponents/ApplyLink';

const Jobs = ({params}: {
  params: {jobid: string}
}) => {
  const Jobid = params.jobid;
  const [singlejob, setSingleJob] = useState<any>(null); // Define the type for singlejob
  const [loading, setLoading] = useState(true); // Set loading to true initially



  const GetSingleJob = useCallback(async () => {
    try {
      const response = await fetch(`https://developnators.azurewebsites.net/api/JobHunting/GetJobWeb/${Jobid}`);
      if (!response.ok) {
        throw new Error('Failed to fetch job');
      }
      const data = await response.json();
      setSingleJob(data);
      setLoading(false); // Set loading to false when data is fetched
    } catch (error) {
      console.error('Error fetching job:', error);
    }
  }, [Jobid]); 
  
  useEffect(() => {
    GetSingleJob();
  }, [GetSingleJob]);

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
    <div style={{backgroundColor:'#F7F8F9'}}>
      <Head>
        <title>Jobs Page</title> 
        <meta name="description" content="Your job listings page description" />  
      </Head>

      <div style={{ display: "flex" }} className="link-content" data-theme="light">
        <div style={{ flex: "1", marginRight: shouldApplyStyle ? "20px" : 0 }} className="container">
          <h1><b>{singlejob?.organizationName}</b></h1>
          <p className="mb-2">{singlejob?.aboutOrganization}</p>
          <p className="text-sm text-gray-500 mb-2">Posted on April 7, 2024 by Admin</p>

          <div className="flex flex-col md:flex-row items-center md:space-x-4">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img src={singlejob?.cardPhoto} alt="Organization" className="w-full rounded-lg shadow-md" />
            </div>
            <div className="md:w-1/2">
              <p className="text-gray-600">
                <b>{singlejob?.organizationName}</b> {singlejob?.short_Description}
              </p>
            </div>
          </div>

          <JobSummary title={singlejob?.jobTitle} role={singlejob?.jobTitle} description={singlejob?.job_Description} />
          <HiringDetails role={singlejob?.jobRole} Jobqualifications={singlejob?.qualification} experience={singlejob?.experience} batch={singlejob?.batch} salary={singlejob?.salary} lastDate={singlejob?.lastApplyDate} location={singlejob?.jobLocation} telegramLink={singlejob?.telegramGroupLink} organizationName={singlejob?.organizationName} />
          <Role role={singlejob?.jobTitle} organizationName={singlejob?.organizationName} batch={singlejob?.batch}  />
          <Responsibility description={singlejob?.job_Description}  />
          <Qualification batch={singlejob?.batch} />
          {/* <SkillRequirement /> */}
          <Designation />
          <HowToApply appyInstructions={singlejob?.appyInstructions} />
         <ApplyLink appyLink={singlejob?.appyLink} />
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
    </div>
  );
};

export default Jobs;
