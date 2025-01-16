import React, { useState } from "react";
import YearRangePicker from "./YearRangePicker";

const MonthYearPicker = ({ currentYear, currentMonth, onMonthSelect }) => {
  const today = new Date();
  const [isYearRangeVisible, setIsYearRangeVisible] = useState(false); // State to toggle YearRange visibility
  const [updatedYear, setUpdatedYear] = useState(currentYear);
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
    if (updatedYear > today.getFullYear()) {
      setUpdatedYear((prev) => prev - 1);
    }
  };

  const handleNextYear = () => {
    setUpdatedYear((prev) => prev + 1);
  };

  const handleYearClick = (e) => {
    e.stopPropagation();
    setIsYearRangeVisible(!isYearRangeVisible);
  };

  const handleYearSelect = (year) => {
    onMonthSelect(currentMonth, year);
    setIsYearRangeVisible(false);
  };

  return (
    <div className="absolute left-0 w-full border flex justify-center">
      <div className="p-2 bg-white border border-gray-200 rounded-md w-64">
        <div className="flex justify-between items-center mb-2">
          <button
            onClick={handlePrevYear}
            disabled={updatedYear <= today.getFullYear()} // Changed this condition
            className={`text-lg ${
              updatedYear <= today.getFullYear()
                ? "text-gray-300"
                : "text-black"
            }`}
          >
            &#8592;
          </button>
          <h2 className="text-sm cursor-pointer" onClick={handleYearClick}>
            {updatedYear}
          </h2>
          <button onClick={handleNextYear} className="text-lg">
            &#8594;
          </button>
        </div>
        {isYearRangeVisible && (
          <div className="absolute z-100 left-0 top-0 w-full flex items-center justify-center">
            {" "}
            <YearRangePicker
              onYearClick={handleYearClick}
              onYearSelect={handleYearSelect}
            />
          </div>
        )}

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
              onClick={() => {
                onMonthSelect(index, updatedYear);
              }}
            >
              {month}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonthYearPicker;
