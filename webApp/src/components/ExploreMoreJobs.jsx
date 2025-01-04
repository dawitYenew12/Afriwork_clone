import Filter from "../assets/Icons/Filter";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "../styles/jobStyle.css";
import PlaceIcon from "@mui/icons-material/Place";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function ExploreMoreJobs() {
  return (
    <div className="mx-2 sm:mx-24 md:mx-48 my-4 bg-white px-4 pt-8 rounded-xl h-full job-card mb-8">
      <p className="text-3xl font-semibold">Jobs you might like</p>
      <hr className="mt-4" />
      <div className="flex flex-row mt-8 px-2 justify-between">
        <div className="flex items-center w-10/12 relative">
          <input
            type="text"
            name="search"
            id="search"
            className="border w-full rounded-full p-2 placeholder:text-sm pl-12 placeholder:text-gray-500"
            placeholder="Search for job"
          />
          <SearchOutlinedIcon className="absolute left-3 text-gray-400" />
        </div>
        <div className="w-[fit-content] flex items-center cursor-pointer">
          <Filter className="w-[23px] h-[23px] text-red-500" />
        </div>
      </div>
      <div className="flex flex-col px-2 py-2 hover:bg-gray-100 hover:rounded-xl mt-8 transition ease-in duration-300 cursor-pointer">
        <p className="capitalize text-xl font-medium">
          Digital Media production director
        </p>
        <div className="flex flex-row space-x-2 mt-2">
          <p className="capitalize text-gray-400 text-sm">Private Client</p>
          <p className="text-red-300 text-sm">Posted 3 hours ago</p>
        </div>
        <div className="flex flex-row space-x-1 items-center mt-2 pl-2">
          <PlaceIcon className="text-gray-400" style={{ fontSize: "18px" }} />
          <p className="text-gray-400 text-sm ">Addis Ababa, Ethiopia</p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-sm text-gray-700 w-10/12">
            We are seeking a highly motivated and exprerienced Digital Media
            Production Director to join our dynamic ...
          </p>
          <p className="text-red-400 text-xs mt-2">see more</p>
        </div>
        <div className="flex flex-col mt-4">
          <div className="bg-gray-200 px-4 py-2 rounded-full w-[fit-content] text-sm text-gray-700">
            Media and communication
          </div>
          <div className="bg-gray-200 px-4 py-2 rounded-full w-[fit-content] mt-2 text-sm text-gray-700">
            Onsite - Full Time
          </div>
        </div>
        <p className="mt-4">Deadline: <span className="text-gray-500">Janduary 7, 2025</span></p>
        <button className="bg-gradient-to-r from-[#eb7134] to-[#eb3471] text-center p-2 mt-4 rounded-xl text-white ">Apply</button>
      </div>
      <hr className="mt-4" />
      <div className="flex flex-col px-2 py-2 hover:bg-gray-100 hover:rounded-xl transition ease-in duration-300 cursor-pointer mt-4">
        <p className="capitalize text-xl font-medium">
          Digital Media production director
        </p>
        <div className="flex flex-row space-x-2 mt-2">
          <p className="capitalize text-gray-400 text-sm">Private Client</p>
          <p className="text-red-300 text-sm">Posted 3 hours ago</p>
        </div>
        <div className="flex flex-row space-x-1 items-center mt-2 pl-2">
          <PlaceIcon className="text-gray-400" style={{ fontSize: "18px" }} />
          <p className="text-gray-400 text-sm ">Addis Ababa, Ethiopia</p>
        </div>
        <div className="flex flex-col mt-4">
          <p className="text-sm text-gray-700 w-10/12">
            We are seeking a highly motivated and exprerienced Digital Media
            Production Director to join our dynamic ...
          </p>
          <p className="text-red-400 text-xs mt-2">see more</p>
        </div>
        <div className="flex flex-col mt-4">
          <div className="bg-gray-200 px-4 py-2 rounded-full w-[fit-content] text-sm text-gray-700">
            Media and communication
          </div>
          <div className="bg-gray-200 px-4 py-2 rounded-full w-[fit-content] mt-2 text-sm text-gray-700">
            Onsite - Full Time
          </div>
        </div>
        <p className="mt-4">Deadline: <span className="text-gray-500">Janduary 7, 2025</span></p>
        <button className="bg-gradient-to-r from-[#eb7134] to-[#eb3471] text-center p-2 mt-4 rounded-xl text-white ">Apply</button>
      </div>
      <div className="flex flex-row justify-center items-center mt-4 cursor-pointer mb-10">
        <ArrowDownwardIcon className="text-red-500 text-sm"/>
        <p className="text-red-500 text-sm capitalize">Load More</p>
      </div>
    </div>
  );
}

export default ExploreMoreJobs;
