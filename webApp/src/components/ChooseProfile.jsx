import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

function ChooseProfile() {
  return (
    <div className="p-4 mt-8 w-full px-4 sm:px-24 md:px-48 mt-6">
      <p className="text-2xl font-semibold">Choose your profile</p>
      <p className="text-gray-800 mt-2">
        Here are a list of profiles you have created. You can choose a profile
        to post or manage jobs.
      </p>
      <div
        className="border-2 border-red-200 hover:border-red-500 cursor-pointer p-[6px] rounded-md mt-8"
        style={{ transition: "transform 0.3s ease-out", transform: "scale(1)" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <div className="flex flex-row items-center">
          <div className="w-[fit-content] h-[fit-content] flex items-center justify-center p-[1px] border-2 border-gray-200 rounded-full border-gray-300">
            <div className="flex justify-center items-center w-[fit-content] h-[fit-content] p-[11px] border-2 border-gray-200 rounded-full text-gray-600 bg-gray-100">
              <PermIdentityOutlinedIcon style={{ fontSize: "30px" }} />
            </div>
          </div>
          <div className="ml-2 space-y-2">
            <p className="font-semibold capitalize">Dawit Yenew</p>
            <p className="text-sm capitalize">Private Client</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseProfile;
