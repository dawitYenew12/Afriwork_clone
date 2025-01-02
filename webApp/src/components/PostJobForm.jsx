import DraftsIcon from "@mui/icons-material/Drafts";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import MapSite from "../assets/Icons/MapSite";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DomainAddIcon from "@mui/icons-material/DomainAdd";
import PersonGrad from "../assets/Icons/PersonGrad";
import ExperianceBulb from "../assets/Icons/ExperianceBulb";
import WcIcon from "@mui/icons-material/Wc";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import GroupsIcon from "@mui/icons-material/Groups";
import "../styles/jobStyle.css";

function PostJobForm() {
  return (
    <div className="px-4 sm:px-24 md:px-48 mt-6">
      <div className="flex flex-row justify-end">
        <div className="flex flex-row items-center space-x-2 border border-red-500 w-[fit-content] px-4 py-1 rounded-lg">
          <DraftsIcon className="text-red-500 fill-current" />
          <p className="text-lg text-red-500">Drafts</p>
        </div>
      </div>
      <div>
        <p className="capitalize text-xl font-bold">Job Post</p>
      </div>
      <div className="flex flex-col mt-4 relative">
        <label htmlFor="jobTitle" className="font-semibold opacity-90">
          Job Title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="jobTitle"
          placeholder="Job Title"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="absolute top-11 left-3">
          <NewspaperIcon
            className="text-gray-300 fill-current"
            style={{ transform: "scale(1.3)" }}
          />
        </div>
      </div>
      {/*Job site*/}
      <div className="flex flex-col mt-2 relative">
        <label htmlFor="jobSite" className="font-semibold opacity-90">
          Job Site <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="jobSite"
          placeholder="Enter Job Site"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="w-[32px] absolute top-10 left-2">
          <MapSite className="text-gray-300" />
        </div>
        <div className="absolute top-11 right-3">
          <KeyboardArrowDownIcon className="text-gray-800" />
        </div>
      </div>

      {/* Job type */}
      <div className="flex flex-col mt-2 relative">
        <label htmlFor="jobType" className="font-semibold opacity-90">
          Job Type <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="jobType"
          placeholder="Enter Job Type"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="w-[32px] absolute top-11 left-3">
          <FormatListBulletedIcon className="text-gray-300" />
        </div>
        <div className="absolute top-11 right-3">
          <KeyboardArrowDownIcon className="text-gray-800" />
        </div>
      </div>
      {/* Job sector */}
      <div className="flex flex-col mt-2 relative">
        <label htmlFor="jobSector" className="font-semibold opacity-90">
          Job Sector <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="jobSector"
          placeholder="Select Job Sector"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="w-[32px] absolute top-11 left-3">
          <DomainAddIcon className="text-gray-300" />
        </div>
        <div className="absolute top-11 right-3">
          <KeyboardArrowDownIcon className="text-gray-800" />
        </div>
      </div>
      {/* Job type */}
      <div className="flex flex-col mt-2 relative">
        <label
          htmlFor="educationQualification"
          className="font-semibold opacity-90"
        >
          Education Qualification <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="educationQualification"
          placeholder="Select Education"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="w-[28px] absolute top-11 left-3">
          <PersonGrad className="text-gray-300" />
        </div>
        <div className="absolute top-11 right-3">
          <KeyboardArrowDownIcon className="text-gray-800" />
        </div>
      </div>
      {/* Job sector */}
      <div className="flex flex-col mt-2 relative">
        <label htmlFor="experianceLevel" className="font-semibold opacity-90">
          Experiance Level <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="experianceLevel"
          placeholder="Select Experiance Level"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="w-[20px] absolute top-11 left-3">
          <ExperianceBulb className="text-gray-300" />
        </div>
        <div className="absolute top-11 right-3">
          <KeyboardArrowDownIcon className="text-gray-800" />
        </div>
      </div>
      {/* Gender */}
      <div className="flex flex-col mt-2 relative">
        <label htmlFor="gender" className="font-semibold opacity-90">
          Gender <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="gender"
          placeholder="Select your gender preference"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="w-12 h-12 absolute top-11 left-2">
          <WcIcon className="text-gray-300" />
        </div>
        <div className="absolute top-11 right-3">
          <KeyboardArrowDownIcon className="text-gray-800" />
        </div>
      </div>
      {/* Job Deadline */}
      <div className="flex flex-col mt-2 relative">
        <div className="flex flex-row justify-between items-center">
          <label htmlFor="jobDeadline" className="font-semibold opacity-90">
            Job Deadline
          </label>
          <p className="text-xs font-medium text-gray-400">Default: 15 days</p>
        </div>
        <input
          type="text"
          id="jobDeadline"
          placeholder="MM/DD/YYYY"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="w-12 h-12 absolute top-11 left-2">
          <InsertInvitationIcon className="text-gray-300" />
        </div>
        <div className="absolute top-11 right-3">
          <KeyboardArrowDownIcon className="text-gray-800" />
        </div>
      </div>
      {/* vacancies */}
      <div className="flex flex-col mt-2 mb-6 relative">
        <label htmlFor="vacancies" className="font-semibold opacity-90">
          Vacancies
        </label>
        <input
          type="text"
          id="vacancies"
          placeholder="Number of vacancies"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="absolute top-11 left-3">
          <GroupsIcon
            className="text-gray-300"
            style={{ transform: "scale(1.2)" }}
          />
        </div>
      </div>
      <div className="flex flex-col mt-12 relative">
        <div className="w-full border-[1px] border-b border-gray-300 mb-6"></div>
        <div className="text-red-500 absolute bottom-[17px] left-1/2 transform -translate-x-1/2 px-2 z-10 bg-white">
          Tell us about your job
        </div>
      </div>
    </div>
  );
}

export default PostJobForm;
