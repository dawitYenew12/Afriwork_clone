import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

function JobPosts() {
  return (
    <div className="py-4 sm:px-24 md:px-48">
      <div className="flex flex-col rounded-2xl px-6 jobPostsShadow">
        <p className="capitalize text-3xl font-semibold mt-8 px-4">Job Posts</p>
        <hr className="mt-6 border border-gray-200" />
        <div className="flex items-center w-full relative mt-6">
          <input
            type="text"
            name="search"
            id="search"
            className="border w-full rounded-md p-2 placeholder:text-sm pl-12 placeholder:text-gray-500"
            placeholder="Search..."
          />
          <SearchOutlinedIcon className="absolute left-3 text-gray-400" />
        </div>

        <div className="mx-2 mt-6 mb-4">
          <div className="flex flex-col p-4 pb-10 bg-gray-50 border rounded-2xl">
            <h1 className="text-2xl font-semibold">Hello, there 👋</h1>
            <p>You currently have no job posted. Post a job and get your recruitment journey started.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobPosts;
