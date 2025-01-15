import React, { useState } from "react";
import MonthYearPicker from "./MonthYearPicker";

const DatePicker = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth()); // Start with the current month
  const [currentYear, setCurrentYear] = useState(today.getFullYear()); // Start with the current year
  const [currentDay, setCurrentDay] = useState(today.getDate()); // Start with the current day
  const [selectedDate, setSelectedDate] = useState(null); // State to store the selected date
  const [isMonthYearPickerVisible, setIsMonthYearPickerVisible] =
    useState(false); // State to toggle MonthYearPicker visibility

  // Calculate number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  // Calculate the first weekday of the current month (0 = Sunday, 6 = Saturday)
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  // Calculate number of days in the previous month
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  // Handle previous month navigation
  const handlePrevMonth = () => {
    if (
      currentYear > today.getFullYear() ||
      (currentMonth > 0 && currentYear === today.getFullYear())
    ) {
      if (currentMonth === 0) {
        setCurrentMonth(11); // Go to December of the previous year
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    }
  };

  // Handle next month navigation
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0); // Go to January of the next year
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const handleDayClick = (day, month, year) => {
    const clickedDate = new Date(year, month, day);
    if (selectedDate && clickedDate.getTime() === selectedDate.getTime()) {
      setSelectedDate(null); // Deselect if it's already selected
    } else {
      console.log(clickedDate);
      setSelectedDate(clickedDate);
    }
  };

  const handleMonthClick = () => {
    setIsMonthYearPickerVisible(!isMonthYearPickerVisible);
  };

  const handleMonthSelect = (index, year) => {
    setCurrentMonth(index);
    setCurrentYear(year);
    setIsMonthYearPickerVisible(false);
  };

  // Generate days to display in the grid
  const days = [];

  // Fill in the days of the previous month to complete the grid
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    days.push(
      <div
        key={`prev-${i}`}
        className="flex-1 flex items-center justify-center p-2 text-gray-300 cursor-pointer hover:bg-gray-200 rounded-lg"
      >
        {daysInPrevMonth - i}
      </div>
    );
  }

  // Fill in the days of the current month
  for (let i = 1; i <= daysInMonth; i++) {
    const isCurrentDay =
      i === currentDay &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear();
    const isSelected =
      selectedDate &&
      i === selectedDate.getDate() &&
      currentMonth === selectedDate.getMonth() &&
      currentYear === selectedDate.getFullYear();
    const isPastDay =
      currentYear === today.getFullYear() &&
      currentMonth === today.getMonth() &&
      i < currentDay;

    days.push(
      <div
        key={`current-${i}`}
        className={`flex-1 flex items-center justify-center p-2 cursor-pointer hover:bg-gray-200 rounded-lg ${
          isCurrentDay ? "bg-blue-300" : ""
        } ${isPastDay ? "text-gray-300" : ""} ${
          isSelected ? "hover:bg-red-400 bg-red-400" : ""
        }`}
        onClick={() => handleDayClick(i, currentMonth, currentYear)}
      >
        {i}
      </div>
    );
  }

  // Calculate if we need a 6th row (42 slots)
  const totalSlots = days.length > 35 ? 42 : 35;
  const remainingSlots = totalSlots - days.length;

  // Fill in the days of the next month to complete the grid
  for (let i = 1; i <= remainingSlots; i++) {
    days.push(
      <div
        key={`next-${i}`}
        className="flex-1 flex items-center justify-center p-2 cursor-pointer text-gray-300 hover:bg-gray-200 rounded-lg"
      >
        {i}
      </div>
    );
  }

  // Group days into weeks (7 days per row)
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div className="max-w-[250px] mx-auto p-2 bg-gray-50 border border-gray-200 rounded-md mt-16 relative">
      <div className="flex justify-between items-center mb-2">
        <button onClick={handlePrevMonth} className="text-lg">
          &#8592;
        </button>
        <h2 className="text-sm cursor-pointer" onClick={handleMonthClick}>
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
          })}{" "}
          {currentYear}
        </h2>
        <button onClick={handleNextMonth} className="text-lg">
          &#8594;
        </button>
      </div>

      {isMonthYearPickerVisible && (
        <div className="absolute left-0 w-full flex items-center justify-center">
          <MonthYearPicker onMonthSelect={handleMonthSelect} />
        </div>
      )}

      {/* Weekdays */}
      <div className="flex text-center text-gray-500 text-xs">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="flex-1 py-1">
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="flex flex-col mt-2 text-xs">
        {weeks.map((week, index) => (
          <div key={index} className="flex mb-2">
            {week}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePicker;
