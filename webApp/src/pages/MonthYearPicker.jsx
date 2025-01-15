import React, { useState } from "react";
import YearRangePicker from "./YearRangePicker";

const MonthYearPicker = ({ onMonthSelect }) => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear()); // Start with the current year
  const currentMonth = today.getMonth(); // Get the current month (0 = January, 11 = December)
  const [isYearRangeVisible, setIsYearRangeVisible] = useState(false); // State to toggle YearRange visibility

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const handlePrevYear = () => {
    if (currentYear > today.getFullYear()) {
      setCurrentYear(currentYear - 1);
    }
  };

  const handleNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  const handleYearClick = () => {
    setIsYearRangeVisible(!isYearRangeVisible);
  }

  const handleYearSelect = (year) => {
    setCurrentYear(year);
    setIsYearRangeVisible(false);
  }

  return (
    <div className="w-[220px] p-2 bg-gray-50 border border-gray-200 rounded-md">
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={handlePrevYear}
          disabled={currentYear === today.getFullYear()}
          className={`text-lg ${
            currentYear === today.getFullYear() ? "text-gray-300" : "text-black"
          }`}
        >
          &#8592;
        </button>
        <h2 className="text-sm cursor-pointer" onClick={handleYearClick}>{currentYear}</h2>
        <button onClick={handleNextYear} className="text-lg">
          &#8594;
        </button>
      </div>
      {isYearRangeVisible && <div className="absolute z-100 left-0 top-0 w-full flex items-center justify-center"> <YearRangePicker onYearClick={handleYearClick} onYearSelect={handleYearSelect}/></div>}

      {/* Month Grid (4x3 layout) */}
      <div className="grid grid-cols-4 gap-1 text-center">
        {months.map((month, index) => (
          <div
            key={month}
            className={`py-1 cursor-pointer hover:bg-gray-200 text-sm rounded-md ${
              currentYear === today.getFullYear() && index === currentMonth
                ? "bg-blue-300"
                : ""
            }`}
            onClick={() => onMonthSelect(index, currentYear)}
          >
            {month}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthYearPicker;
