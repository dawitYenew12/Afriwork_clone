import PlaceIcon from "@mui/icons-material/Place";
import "../styles/jobStyle.css";

function JobContent() {
  return (
    <>
    <div className="px-2 sm:px-24 md:px-48 pb-20">
      <div className="flex flex-col border py-4 px-4 mt-4 mb-4 rounded-xl relative">
        {/* tutor title */}
        <div className="flex flex-row justify-between items-center">
          <div className="font-semibold text-2xl">Online tutor</div>
          <div className="text-xs uppercase text-blue-700 font-medium">Bot</div>
        </div>
        {/* job type */}
        <div className="mt-2 text-sm font-medium">Teaching and Tutor</div>
        {/* post date and job site*/}
        <div className="flex flex-row justify-between mt-2 text-gray-400 text-sm">
          <p className="w-6/12">December 31, 2024</p>
          <div className="flex flex-row">
            <PlaceIcon style={{ fontSize: 18 }} />
            <div className="">From Anywhere/Remote in Ethiopia</div>
          </div>
        </div>
        <div className="border-b mt-6 underline-custom"></div>
        {/* job type */}
        <div className="mt-4">
          <p className="capitalize text-gray-500 font-semibold text-lg">
            Job Type:{" "}
            <span className="capitalize font-semibold text-black">
              Remote - Contractual
            </span>
          </p>
          <p className="capitalize text-gray-500 font-semibold text-lg">
            Deadline:{" "}
            <span className="capitalize font-semibold text-black">
              January 14, 2025
            </span>
          </p>
          <p className="capitalize text-gray-500 font-semibold text-lg">
            Education Qualification:{" "}
            <span className="capitalize font-semibold text-black">
              Bachelors Degree
            </span>
          </p>
        </div>

        <div className="border-b mt-6 underline-custom"></div>
        <div className="mt-4 flex flex-row justify-between">
          <div className="w-6/12">
            <p className="capitalize text-red-500 font-bold tracking-wide">
              Amount Not Specified
            </p>
            <span className="uppercase text-gray-400 text-md">Monthly</span>
          </div>
          <div>
            <p className="uppercase text-red-500 font-bold">Intermediate</p>
            <span className="capitalize text-gray-400 text-md">
              Experience Level
            </span>
          </div>
        </div>
        <div className="border-b mt-6 underline-custom"></div>

        {/* job description */}
        <div className="mt-4 flex flex-col">
          <p className="capitalize font-semibold">Job Description</p>
          <p className="text-gray-600">
            <p className="text-gray-600">Key Responsibilities: </p>
            -Lorem ipsum dolor sit amet consectetur <br />
            -adipisicing elit. Similique
            <br />
            -Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            <br />
            -Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            <br />
          </p>
        </div>
        <div className="border-b mt-6 underline-custom"></div>
        <div className="mt-4 flex flex-col">
          <p className="capitalize font-semibold">Skills And Expertise</p>
          <div className="bg-gray-200 px-2 rounded-full mt-4 w-[fit-content]">
            Ability to Simplify complex Ideas
          </div>
          <div className="bg-gray-200 px-2 rounded-full mt-4 w-[fit-content]">
            Active Listening
          </div>
        </div>
      </div>
      <div className="flex flex-col border py-4 px-4 mt-4 rounded-xl">
        <p className="text-lg">Private Client</p>
        <p className="font-semibold text-lg"><span className="text-red-500 font-semibold">23</span> Jobs Posted</p>
      </div>
    </div>
    <div className="bg-gray-100 h-16 flex justify-center items-center p-2 sm:px-24 md:px-48 fixed bottom-0 w-full">
      <button className="bg-[#555659] text-white w-full h-10 rounded-lg">
        Apply
      </button>
    </div>
    </>
  );
}

export default JobContent;
