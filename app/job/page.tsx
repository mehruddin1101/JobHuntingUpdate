import React from 'react';
import ApplyLink from "../components/jobcomponents/ApplyLink";
import Designation from "../components/jobcomponents/Designation";
import HiringDetails from "../components/jobcomponents/HiringDetails";
import HowToApply from "../components/jobcomponents/HowtoApply";
import Qualification from "../components/jobcomponents/Qualification";
import Responsibility from "../components/jobcomponents/Responsibilities";
import Role from "../components/jobcomponents/Role";
import SkillRequirement from "../components/jobcomponents/SkillRequirement";
import JobSummary from "../components/jobcomponents/jobSummary";

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
}

interface ContentProps {
  data: JobData;
}

const Content: React.FC<ContentProps> = ({ data }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg link-content">
      <h1><b>{data.organizationName}</b></h1>
      <p className="mb-2">{data.aboutOrganization}</p>
      <p className="text-sm text-gray-500 mb-2">Posted on April 7, 2024 by Admin</p>

      {/* Image and job description */}
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        {/* Image */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          {/* eslint-disable @next/next/no-img-element */}
          <img src={data.cardPhoto} alt="Organization" className="w-full rounded-lg shadow-md" />
          {/* eslint-enable @next/next/no-img-element */}
        </div>

        {/* Job description */}
        <div className="md:w-1/2">
          <p className="text-gray-600">
            {/* Job details */}
            <b>{data.organizationName}</b> {data.short_Description}
          </p>
        </div>
      </div>

      {/* Job summary */}
      <JobSummary title={data.jobTitle} role={data.jobTitle} description={data.job_Description} />

      {/* Career Detail */}
      <HiringDetails role={data.jobRole} Jobqualifications={data.qualification} experience={data.experience} batch={data.batch} salary={data.salary} lastDate={data.lastApplyDate} location={data.jobLocation} telegramLink={data.telegramGroupLink} organizationName={data.organizationName} />

      {/* Role */}
      <Role role={data.jobTitle} organizationName={data.organizationName} batch={data.batch}  />

      {/* Responsibilities */}
      <Responsibility description={data.job_Description}  />

      {/* Qualification */}
      <Qualification batch={data.batch} />

      {/* Skill requirement */}
      <SkillRequirement />

      {/* Designation */}
      <Designation />

      {/* How to apply */}
      <HowToApply appyInstructions={data.appyInstructions} />

      {/* Apply link */}
      <ApplyLink appyLink={data.appyLink} />
    </div>
  );
};

export default Content;
