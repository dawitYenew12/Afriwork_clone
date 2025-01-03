import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import Link from "../assets/Icons/Link";
import AddIcon from "@mui/icons-material/Add";
import DescriptionIcon from "@mui/icons-material/Description";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import SyncOutlinedIcon from "@mui/icons-material/SyncOutlined";
import DeleteIcon from "@mui/icons-material/Delete";
import "../styles/jobStyle.css";

function ApplicationDetail() {
  return (
    <>
      <div className="px-4 sm:px-24 md:px-48 mt-6">
        <div className="flex flex-row items-center space-x-2">
          <p className="text-xl font-semibold">
            Please enter your cover letter
          </p>
          <ErrorOutlineIcon
            style={{ fontSize: 22 }}
            className="text-gray-400"
          />
        </div>
        <div className="mt-4 flex flex-col space-y-1">
          <textarea
            className="w-full h-56 border border-gray-400 rounded-3xl p-4 placeholder:text-lg"
            placeholder="Cover letter"
          ></textarea>
          <p className="text-gray-500 text-sm text-right">
            1000 characters left
          </p>
        </div>
        <hr className="mt-6 border border-gray-200" />
        <p className="mt-6 text-xl font-semibold">
          Please enter your portfolio links (if any)
        </p>
        <div className="mt-4 flex flex-col relative">
          <input
            type="text"
            placeholder="Portfolio Link 1"
            className="border-2 border-gray-400 rounded-xl mt-4 w-full px-4 py-[15px] pl-16"
          />
          <Link className="w-6 h-12 absolute top-5 left-6 text-gray-500" />
        </div>
        <div className="mt-4 flex flex-col relative mb-10">
          <input
            type="text"
            placeholder="Add more links"
            className="border-2 border-gray-400 rounded-xl mt-4 w-full px-4 py-[15px] pl-32 placeholder:text-xl placeholder:text-gray-900 placeholder:font-semibold"
          />
          <AddIcon
            className="absolute top-6 left-12 text-gray-400"
            style={{ fontSize: 44 }}
          />
        </div>
        <hr className="mt-6 border border-gray-200" />
        <div className="mt-6 flex flex-row spce-x-8 px-4 py-2 rounded-lg custom-shadow">
          <div className="flex items-center justify-center">
            <DescriptionIcon
              className="text-gray-400"
              style={{ fontSize: "78px" }}
            />
          </div>
          <div className="w-full flex flex-col space-y justify-center">
            <p className="text-xl">Dawit's CV</p>
            <div className="flex flex-row space-x-1">
              <RemoveRedEyeOutlinedIcon
                className="text-gray-400"
                style={{ fontSize: "20px" }}
              />
              <a href="#" className="underline text-gray-400 text-sm">
                View CV
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-row justify-between mb-32">
          <div className="w-1/2 p-2 border bg-[#3f3f46] text-white relative rounded-l-full">
            <button className="w-full text-center">Update CV</button>
            <SyncOutlinedIcon
              className="text-white absolute top-1/2 left-4 transform -translate-y-1/2"
              style={{ fontSize: 20 }}
            />
          </div>
          <div className="w-1/2 p-2 border bg-[#3f3f46] text-white relative rounded-r-full">
            <button className="w-full text-center">Delete CV</button>
            <DeleteIcon
              className="text-white absolute top-1/2 left-4 transform -translate-y-1/2"
              style={{ fontSize: 20 }}
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-100 h-16 flex justify-center items-center p-2 sm:px-24 md:px-48 fixed bottom-0 w-full">
        <button className="bg-[#3f3f46] text-white w-full h-10 rounded-lg">
          Apply
        </button>
      </div>
    </>
  );
}

export default ApplicationDetail;
