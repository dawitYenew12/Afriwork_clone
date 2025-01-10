import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DeleteIcon from "@mui/icons-material/Delete";

function DraftList() {
  return (
    <div className="p-4 mt-4 px-4 sm:px-24 md:px-48 mt-6">
      <div className="text-red-500 underline">
        <ArrowBackIcon />
        Back to Job form
      </div>
      <p className="font-semibold text-3xl mt-4">Drafts</p>
      <div className="flex flex-row mt-8 justify-between">
        <div className="flex items-center w-8/12 relative">
          <input
            type="text"
            name="search"
            id="search"
            className="border w-full rounded-md p-2 placeholder:text-sm pl-12 placeholder:text-gray-500"
            placeholder="Search for job"
          />
          <SearchOutlinedIcon className="absolute left-3 text-gray-400" />
        </div>
        <div className="w-4/12 flex items-center justify-end">
          <button className="bg-red-500 text-sm text-white rounded-full px-2 w-10/12 py-2">
            Discard all
          </button>
        </div>
      </div>
      <hr className="mt-6 border border-gray-200" />
      <div className="flex flex-col mt-[27px]"> 
        <div className="flex flex-row">
          <p className="text-md font-medium mt-4 text-gray-500 w-5/12">
            Job title
          </p>
          <p className="text-md font-medium mt-4 text-gray-500 w-7/12">
            Last updated
          </p>
        </div>
        <div className="flex flex-row w-full mt-8">
          <p className="w-5/12 text-sm text-gray-500">Mobile app d...</p>
          <p className="w-4/12 text-sm text-gray-500">12/07/25</p>
          <div className="w-3/12 flex items-center justify-end">
            <DeleteIcon
              className="text-red-500 border border-red-500 rounded-2xl flex items-center justify-center py-[2px]"
              style={{ width: "36px", height: "30px" }}
            />
          </div>
        </div>
        <hr className="mt-4 border border-gray-200" />
        <div className="flex flex-row w-full mt-4">
          <p className="w-5/12 text-sm text-gray-500 flex items-center">Full stack dev...</p>
          <p className="w-4/12 text-sm text-gray-500 flex items-center">12/07/25</p>
          <div className="w-3/12 flex items-center justify-end">
            <DeleteIcon
              className="text-red-500 border border-red-500 rounded-2xl flex items-center justify-center py-[2px]"
              style={{ width: "36px", height: "30px" }}
            />
          </div>
        </div>
        <hr className="mt-4 border border-gray-200" />
      </div>
    </div>
  );
}

export default DraftList;
