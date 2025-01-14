import React, { useState } from "react";

const DatePicker = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // Start with the current month
  const [currentYear, setCurrentYear] = useState(today.getFullYear()); // Start with the current year
  const [currentDay, setCurrentDay] = useState(today.getDate()); // Start with the current day

  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // Number of days in the current month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // First weekday of the current month
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate(); // Last day of the previous month


  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  // Handles month navigation
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11); // Go to December of the previous year
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0); // Go to January of the next year
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Generate days to display in the grid
  const daysGrid = [];

  // Fill in the days from the previous month
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    daysGrid.push(
      <div key={`prev-${i}`} className=" py-1 text-gray-300 cursor-pointer hover:bg-gray-200 rounded-lg">
        {daysInPrevMonth - i}
      </div>
    );
  }

  // Fill in the days of the current month
  for (let i = 1; i <= daysInMonth; i++) {
    daysGrid.push(
      <div
        key={`current-${i}`}
        className={`py-1 cursor-pointer hover:bg-gray-200 rounded-lg ${
          i === currentDay ? "bg-blue-300" : ""
        }`}
      >
        {i}
      </div>
    );
  }

  // Fill in the days of the next month to complete the grid (42 slots for a 6-week calendar grid)
  const remainingSlots = 42 - daysGrid.length;
  for (let i = 1; i <= remainingSlots; i++) {
    daysGrid.push(
      <div key={`next-${i}`} className="py-1 text-gray-300 cursor-pointer hover:bg-gray-200 rounded-lg">
        {i}
      </div>
    );
  }

  return (
    <div className="max-w-xs mx-auto p-4 bg-gray-50 shadow-md rounded-md">
      <div className="flex justify-between items-center mb-2">
        <button onClick={handlePrevMonth} className="text-lg">
          &#8592;
        </button>
        <h2 className="text-lg font-bold">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentYear}
        </h2>
        <button onClick={handleNextMonth} className="text-lg">
          &#8594;
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 gap-2 text-center font-semibold">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-gray-700">
            {day}
          </div>
        ))}
      </div>

      {/* Days grid */}
      <div className="grid grid-cols-7 gap-2 text-center mt-2">
        {daysGrid}
      </div>
    </div>
  );
};

export default DatePicker;
