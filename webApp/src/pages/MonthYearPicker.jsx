import React, { useState } from "react";

const MonthYearPicker = () => {
  const today = new Date();
  const [currentYear, setCurrentYear] = useState(today.getFullYear()); // Start with the current year
  const currentMonth = today.getMonth(); // Get the current month (0 = January, 11 = December)

  const months = [
    "Jan", "Feb", "Mar", "Apr",
    "May", "Jun", "Jul", "Aug",
    "Sep", "Oct", "Nov", "Dec"
  ];

  const handlePrevYear = () => {
    if (currentYear > today.getFullYear()) {
      setCurrentYear(currentYear - 1);
    }
  };

  const handleNextYear = () => {
    setCurrentYear(currentYear + 1);
  };

  return (
    <div className="max-w-xs mx-auto p-4 bg-gray-50 shadow-md rounded-md">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevYear}
          disabled={currentYear === today.getFullYear()}
          className={`text-lg ${currentYear === today.getFullYear() ? "text-gray-300" : "text-black"}`}
        >
          &#8592;
        </button>
        <h2 className="text-lg font-bold">{currentYear}</h2>
        <button onClick={handleNextYear} className="text-lg">
          &#8594;
        </button>
      </div>

      {/* Month Grid (4x3 layout) */}
      <div className="grid grid-cols-4 gap-2 text-center">
        {months.map((month, index) => (
          <div
            key={month}
            className={`py-2 cursor-pointer hover:bg-gray-200 rounded-lg ${
              currentYear === today.getFullYear() && index === currentMonth
                ? "bg-blue-300"
                : ""
            }`}
          >
            {month}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthYearPicker;
