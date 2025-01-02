function Header() {
  return (
    <div className="w-full flex flex-row justify-between p-2 sm:px-24 md:px-48 pt-6 bg-white sticky top-0 z-50">
      <div className="bg-gradient-to-r from-[#eb7134] to-[#eb3471] bg-clip-text text-transparent font-bold text-3xl pl-4">
        afriwork
      </div>
      <div className="bg-gradient-to-r from-[#eb7134] to-[#eb3471] px-2 py-[5px] font-normal text-lg text-white rounded-full flex items-center justify-center">
        Explore more jobs
      </div>
    </div>
  );
}

export default Header;
