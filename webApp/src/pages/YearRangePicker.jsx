import React, { useState } from "react";

const YearRangePicker = () => {
  const today = new Date();
  const currentYear = today.getFullYear();
  
  const [startYear, setStartYear] = useState(currentYear - 7); // Start range from current year minus 7
  
  const yearsPerPage = 12; // Display 12 years per range (4x3 grid)
  const minYear = currentYear - 7; // Define the minimum year limit

  // Calculate the array of years to display in the current range
  const getYearRange = () => {
    return Array.from({ length: yearsPerPage }, (_, i) => startYear + i);
  };

  const handlePrevYears = () => {
    if (startYear > minYear) {
      setStartYear(startYear - yearsPerPage); // Go back by 12 years
    }
  };

  const handleNextYears = () => {
    setStartYear(startYear + yearsPerPage); // Go forward by 12 years
  };

  return (
    <div className="max-w-xs mx-auto p-4 bg-gray-50 shadow-md rounded-md">
      {/* Header showing the range of years */}
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevYears}
          disabled={startYear <= minYear} // Disable if we are at the minimum year range
          className={`text-lg ${startYear <= minYear ? "text-gray-300 cursor-not-allowed" : ""}`}
        >
          &#8592;
        </button>
        <h2 className="text-lg font-bold">{`${startYear} - ${startYear + yearsPerPage - 1}`}</h2>
        <button onClick={handleNextYears} className="text-lg">
          &#8594;
        </button>
      </div>

      {/* Year Grid (4x3 layout) */}
      <div className="grid grid-cols-4 gap-2 text-center">
        {getYearRange().map((year) => (
          <div
            key={year}
            className={`py-2 cursor-pointer rounded-lg ${
              year === currentYear
                ? "bg-blue-300" // Highlight current year
                : year > currentYear
                ? "hover:bg-gray-200 text-black" // Future years are selectable
                : "text-gray-400" // Past years are not selectable
            }`}
          >
            {year}
          </div>
        ))}
      </div>
    </div>
  );
};

export default YearRangePicker;
