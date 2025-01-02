import DraftsIcon from "@mui/icons-material/Drafts";
import NewspaperIcon from '@mui/icons-material/Newspaper';

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
          className="border p-2 py-3 pl-14 mt-2 rounded-md placeholder:text-gray-600"
        />
        <div className="absolute top-11 left-3">
            <NewspaperIcon className="text-gray-300 fill-current" style={{ transform: "scale(1.5)"}}/>
        </div>
      </div>
    </div>
  );
}

export default PostJobForm;
