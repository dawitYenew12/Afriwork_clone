import { useState } from "react";
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
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import MapIcon from "@mui/icons-material/Map";
import HandCoin from "../assets/Icons/HandCoin";
import PaymentsIcon from "@mui/icons-material/Payments";
import CustomSelect from "./CustomSelect";
import "../styles/jobStyle.css";
import { SelectionOptions } from "../assets/options/SelectionOptions";
import FormField from "./FormField";
import DatePicker from "../pages/DatePicker";
import DateInputFrame from "./DateInputFrame";

function PostJobForm() {
  const [styleState, setStyleState] = useState(Array(5).fill(false));
  const [jobSites, setJobSites] = useState(SelectionOptions.jobSites);
  const [jobTypes, setJobTypes] = useState(SelectionOptions.jobTypes);
  const [jobSectors, setJobSectors] = useState(SelectionOptions.jobSectors);
  const [gender, setGender] = useState(Selection.Gender);
  const [experienceLevel, setExperienceLevel] = useState(
    SelectionOptions.ExperienceLevel
  );
  const [educationAndQual, setEducationAndQual] = useState(
    SelectionOptions.EducationAndQual
  );

  const handleChangeSelect = (e) => {
    console.log(e);
  };

  const handleStyleState = (index) => {
    const newStyleState = [...styleState];
    newStyleState[index] = !newStyleState[index];
    setStyleState(newStyleState);
  };

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
      <FormField
        label={
          <>
            Job Site <span className="text-red-500">*</span>
          </>
        }
      >
        <CustomSelect
          options={jobSites}
          id={"jobSite"}
          placeholder="Enter Job Site"
          onChange={(e) => handleChangeSelect(e)}
          isSearchable={false}
          Icon={MapSite}
        />
      </FormField>

      {/* Job type */}
      <FormField
        label={
          <>
            Job Type <span className="text-red-500">*</span>
          </>
        }
      >
        <CustomSelect
          options={jobTypes}
          id={"jobType"}
          placeholder="Enter Job Type"
          onChange={(e) => handleChangeSelect(e)}
          isSearchable={false}
          Icon={FormatListBulletedIcon}
        />
      </FormField>

      {/* Job sector */}
      <FormField
        label={
          <>
            Job Sector <span className="text-red-500">*</span>
          </>
        }
      >
        <CustomSelect
          options={jobSectors}
          id={"jobSector"}
          placeholder="Select Job Sector"
          onChange={(e) => handleChangeSelect(e)}
          isSearchable={false}
          Icon={DomainAddIcon}
        />
      </FormField>

      {/* Education Qualification */}
      <FormField
        label={
          <>
            Education Qualification <span className="text-red-500">*</span>
          </>
        }
      >
        <CustomSelect
          options={educationAndQual}
          id={"educationQualification"}
          placeholder="Select Education"
          onChange={(e) => handleChangeSelect(e)}
          isSearchable={false}
          Icon={PersonGrad}
        />
      </FormField>

      {/* Experiance Level */}
      <FormField
        label={
          <>
            Experiance Level <span className="text-red-500">*</span>
          </>
        }
      >
        <CustomSelect
          options={experienceLevel}
          placeholder="Select Experiance Level"
          id={"experianceLevel"}
          onChange={(e) => handleChangeSelect(e)}
          isSearchable={false}
          Icon={ExperianceBulb}
        />
      </FormField>

      {/* Gender */}
      <FormField
        label={
          <>
            Gender <span className="text-red-500">*</span>
          </>
        }
      >
        <CustomSelect
          options={experienceLevel}
          placeholder="Select your gender preference"
          id={"gender"}
          onChange={(e) => handleChangeSelect(e)}
          isSearchable={false}
          Icon={WcIcon}
        />
      </FormField>

      {/* Job Deadline */}
      <DateInputFrame
        label={<>Job Deadline</>}
        helperText={<>Default: 15 days</>}
      >
        <DatePicker />
      </DateInputFrame>

      {/* vacancies */}

      <FormField label={<>Vacancies</>}>
        <CustomSelect
          options={experienceLevel}
          placeholder="Number of vacancies"
          id={"vacancies"}
          onChange={(e) => handleChangeSelect(e)}
          isSearchable={false}
          Icon={GroupsIcon}
        />
      </FormField>

      <div className="flex flex-col mt-16 relative">
        <div className="w-full border-[1px] border-b border-gray-300 mb-6"></div>
        <div className="text-red-500 absolute bottom-[17px] left-1/2 transform -translate-x-1/2 px-2 bg-white text-sm">
          Tell us about your job
        </div>
      </div>
      <div className="flex flex-row justify-between items-center mt-8">
        <div className="font-semibold">
          Job Description <span className="text-red-500">*</span>
        </div>
        <p className="text-gray-400">5000 characters left</p>
      </div>
      <div className="mt-2 px-4 py-[11px] flex flex-row space-x-4 bg-orange-50">
        <div className="w-[13px] pt-2">
          <ExperianceBulb className="text-red-600" />
        </div>
        <div className="w-full">
          <p className="text-red-500 font-thin text-sm">Quick Tip!</p>
          <p className="text-red-500 font-thin text-sm">
            Create a high quality job post to attract top talents on Afriwork!
          </p>
        </div>
      </div>
      <div className="flex flex-row space-x-2 mt-4">
        <div
          className={`flex justify-center items-center px-[13px] py-[8px] font-bold border border-black rounded ${
            styleState[0] ? "bg-black text-white" : ""
          }`}
          onClick={() => handleStyleState(0)}
        >
          B
        </div>
        <div
          className={`flex justify-center items-center px-[8px] py-[8px] font-bold border border-black rounded ${
            styleState[1] ? "bg-black text-white" : ""
          }`}
          onClick={() => handleStyleState(1)}
        >
          <FormatItalicIcon style={{ fontSize: "20px" }} />
        </div>
        <div
          className={`flex justify-center items-center px-[8px] py-[8px] font-bold border border-black rounded ${
            styleState[2] ? "bg-black text-white" : ""
          }`}
          onClick={() => handleStyleState(2)}
        >
          <FormatUnderlinedIcon style={{ fontSize: "20px" }} />
        </div>
        <div
          className={`flex justify-center items-center px-[8px] py-[8px] font-bold border border-black rounded ${
            styleState[3] ? "bg-black text-white" : ""
          }`}
          onClick={() => handleStyleState(3)}
        >
          <FormatListBulletedIcon style={{ fontSize: "20px" }} />
        </div>
        <div
          className={`flex justify-center items-center px-[8px] py-[8px] font-bold border border-black rounded ${
            styleState[4] ? "bg-black text-white" : ""
          }`}
          onClick={() => handleStyleState(4)}
        >
          <FormatListNumberedIcon style={{ fontSize: "20px" }} />
        </div>
      </div>
      <textarea
        name=""
        id=""
        placeholder={`Please include the following job details:
      - Main role and responsibilities
      - Required skills
      - Preferred qualifications
      - Perks and Benefits`}
        className="mt-2 border-2 border-[#eb3471] w-full h-[320px] rounded-xl p-6"
      ></textarea>
      <div className="flex flex-row items-center mt-2 space-x-1">
        <ErrorOutlineIcon style={{ fontSize: "16px", color: "red" }} />
        <p className="text-[#701515] text-xs font-medium">
          Minimum of 100 chars is required
        </p>
      </div>
      <div className="flex flex-col mt-20 relative">
        <div className="w-full border-[1px] border-b border-gray-300 mb-6"></div>
        <div className="text-red-500 text-sm absolute bottom-[17px] left-1/2 transform -translate-x-1/2 px-2 z-10 bg-white">
          Additional Information
        </div>
      </div>
      <div className="flex flex-col mt-2 relative">
        <label htmlFor="workLocation" className="font-semibold opacity-90">
          Work Location <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="workLocation"
          placeholder="Country"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="w-12 h-12 absolute top-11 left-2">
          <PlaceOutlinedIcon className="text-gray-300" />
        </div>
        <div className="absolute top-11 right-3">
          <KeyboardArrowDownIcon className="text-gray-800" />
        </div>
      </div>
      {/* city */}
      <div className="flex flex-col mt-2 relative">
        <label htmlFor="city" className="font-semibold opacity-90">
          City <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="city"
          placeholder="Please select a city"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="w-12 h-12 absolute top-11 left-2">
          <MapIcon className="text-gray-300" />
        </div>
        <div className="absolute top-11 right-3">
          <KeyboardArrowDownIcon className="text-gray-800" />
        </div>
      </div>
      <div className="flex flex-col mt-2 relative">
        <label htmlFor="componsationType" className="font-semibold opacity-90">
          Salary/Componsation Type
        </label>
        <input
          type="text"
          id="componsationType"
          placeholder="Select componsation type"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="w-[32px] absolute top-11 left-3">
          <FormatListBulletedIcon className="text-gray-400" />
        </div>
        <div className="absolute top-11 right-3">
          <KeyboardArrowDownIcon className="text-gray-800" />
        </div>
      </div>

      <div className="flex flex-col mt-2 relative">
        <label htmlFor="componsationAmout" className="font-semibold opacity-90">
          Salary/Componsation Amount
        </label>
        <input
          type="number"
          id="componsationAmount"
          placeholder="Please add the salary"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="w-[28px] absolute top-11 left-3">
          <HandCoin className="text-gray-400" />
        </div>
      </div>
      <div className="flex flex-col mt-2 relative">
        <label
          htmlFor="componsationCurrency"
          className="font-semibold opacity-90"
        >
          Salary/Componsation Currency
        </label>
        <input
          type="number"
          id="componsationCurrency"
          placeholder="Select the currency"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="w-[28px] absolute top-11 left-3">
          <PaymentsIcon className="text-gray-400" />
        </div>
        <div className="absolute top-11 right-3">
          <KeyboardArrowDownIcon className="text-gray-800" />
        </div>
      </div>
      <div className="flex flex-col mt-2 relative">
        <div className="flex flex-row justify-between items-center">
          <label htmlFor="skillsExpertise" className="font-semibold opacity-90">
            Skills and Expertise <span className="text-red-500">*</span>
          </label>
          <p className="text-sm font-basic text-gray-400">6 max</p>
        </div>
        <input
          type="text"
          id="skillsExpertise"
          placeholder="Select the skills required"
          className="border border-gray-300 p-2 py-3 pl-12 mt-2 rounded-md placeholder:text-gray-700"
        />
        <div className="w-12 h-12 absolute top-11 left-2">
          <DomainAddIcon className="text-gray-400" />
        </div>
        <div className="absolute top-11 right-3">
          <KeyboardArrowDownIcon className="text-gray-800" />
        </div>
      </div>
      <div className="flex flex-col mt-10 justify-center items-center space-y-4 mb-12">
        <button className="w-[fit-content] px-10 py-[6px] bg-red-600 text-white mt-8 rounded-full relative custom-lines mb-4">
          Continue
        </button>
        <p className="text-red-600">Save as Draft</p>
      </div>
    </div>
  );
}

export default PostJobForm;
