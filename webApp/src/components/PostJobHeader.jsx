import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

function PostJobHeader() {
  return (
    <div className="flex items-center justify-between p-2 sm:px-24 md:px-48 pt-6 bg-white sticky top-0 z-50">
      <div className="flex flex-row items-center">
        <ArrowBackIosIcon style={{ transform: "scale(0.9)" }} />
        <p className="font-medium text-lg ml-1">Back</p>
      </div>

      <div className="bg-gradient-to-r from-[#eb7134] to-[#eb3471] bg-clip-text text-transparent font-bold text-3xl">
        afriwork
      </div>

      {/* Empty div to maintain flex layout */}
      <div className="flex flex-row items-center invisible">
        <ArrowBackIosIcon style={{ transform: "scale(0.9)" }} />
        <p className="font-medium text-lg ml-1">Back</p>
      </div>
    </div>
  );
}

export default PostJobHeader;
