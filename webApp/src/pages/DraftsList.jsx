import DraftList from "../components/DraftList";

function DraftsList() {
  return (
    <div className="w-full flex flex-col"> 
      <div className="font-semibold pl-4 text-center sm:px-24 md:px-48 pt-6 bg-white sticky top-0 z-50">
        <span className="bg-gradient-to-r from-[#eb7134] to-[#db2777] bg-clip-text text-transparent text-3xl">
          afri
        </span>
        <span className="bg-gradient-to-r from-[#db2777] to-[#be185d] bg-clip-text text-transparent text-3xl">
          work
        </span>
      </div>
      <DraftList />
    </div>
  );
}

export default DraftsList;
