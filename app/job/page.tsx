import ApplyLink from "../components/jobcomponents/ApplyLink";
import Designation from "../components/jobcomponents/Designation";
import HiringDetails from "../components/jobcomponents/HiringDetails";
import HowToApply from "../components/jobcomponents/HowtoApply";
import Qualification from "../components/jobcomponents/Qualification";
import Responsibility from "../components/jobcomponents/Responsibilities";
import Responsibilities from "../components/jobcomponents/Responsibilities:";
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
  experience: string | null; // It seems 'experience' can be a string or null
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
  logo: string | null; // It seems 'logo' can be a string or null
  remarks: string;
  statusId: number;
  categoryId: number;
  statusUpdatedBy: string | null; // It seems 'statusUpdatedBy' can be a string or null
  statusUpdatedDate: string | null; // It seems 'statusUpdatedDate' can be a string or null
  categoryMaster: any; // You might want to define a proper type for this
  statusMaster: {
    statusId: number;
    name: string;
    isActive: boolean;
    isDeleted: boolean;
    createdBy: string | null; // It seems 'createdBy' can be a string or null
    createdDate: string;
    modifiedBy: string | null; // It seems 'modifiedBy' can be a string or null
    modifiedDate: string | null; // It seems 'modifiedDate' can be a string or null
  };
  id: number;
  isActive: boolean;
  isDeleted: boolean;
  createdBy: string | null; // It seems 'createdBy' can be a string or null
  createdDate: string;
  modifiedBy: string | null; // It seems 'modifiedBy' can be a string or null
  modifiedDate: string | null; // It seems 'modifiedDate' can be a string or null
  ipaddress: string | null; // It seems 'ipaddress' can be a string or null
  browser: string | null; // It seems 'browser' can be a string or null
}



interface ContentProps {
  data: JobData; 
}
const Content: React.FC<ContentProps> = ({data}) => {
  console.log("data in other compoent " ,data)
  return (
    <div className="bg-white p-6 shadow-md rounded-lg link-content">
      <h1>  <b>{data.organizationName}</b> </h1>
      <p className="  mb-2"> {data.aboutOrganization} </p>
      <p className="text-sm text-gray-500 mb-2">Posted on April 7, 2024 by Admin</p>

      {/* Image and job description */}
      <div className="flex flex-col md:flex-row items-center md:space-x-4">
        {/* Image */}
        <div className="md:w-1/2 mb-4 md:mb-0">
          <img src={data.cardPhoto} alt="GamesKraft" className="w-full rounded-lg shadow-md" />
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
      <JobSummary  title= {data.jobTitle}  role ={data.jobTitle} description = {data.job_Description} />

      {/* Career Detail */}
     

      <HiringDetails role={data.jobRole} Jobqualifications = {data.qualification}  experience = {data.experience} batch = {data.batch} salary = {data.salary} lastDate = {data.lastApplyDate} location ={data.jobLocation} telegramLink = {data.telegramGroupLink} organizationName = {data.organizationName} />

      {/* Role  */}
      <Role/>

      {/* responsibilities */}
      <Responsibilities/>


      {/* Qualification */}

      <Qualification/>



      {/* skill reuirement */}
      <SkillRequirement/>

      {/* designation  */}

      <Designation/>

      {/* responsiblity */}

    <Responsibility/>

    {/* how to apply */}
    <HowToApply/>

    {/*Apply link  */}
    <ApplyLink/>

    </div>


  );
};

export default Content;
