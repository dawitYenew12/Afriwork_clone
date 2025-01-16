import React, { useState, useEffect, useRef } from "react";
import MonthYearPicker from "./MonthYearPicker";
import InsertInvitationIcon from "@mui/icons-material/InsertInvitation";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { getFormattedDate } from "../utils/getFormattedDate";

const DatePicker = ({ onDateChange }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [currentDay, setCurrentDay] = useState(today.getDate());
  const [isMonthYearPickerVisible, setIsMonthYearPickerVisible] =
    useState(false);
  const inputRef = useRef();

  const [inputValue, setInputValue] = useState(""); // State for input value
  const [isPickerVisible, setIsPickerVisible] = useState(false); // State to toggle picker visibility

  // Calculate number of days in the current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  // useEffect(() => {
  //   const handler = (e) => {
  //     if (inputRef.current && !inputRef.current.contains(e.target)) {
  //       setIsPickerVisible(false);
  //     }
  //   };
  //   window.addEventListener("click", handler);
  //   return () => {
  //     window.removeEventListener("click", handler);
  //   };
  // }, []);

  // Handle previous month navigation
  const handlePrevMonth = () => {
    if (
      currentYear < today.getFullYear() ||
      (currentYear === today.getFullYear() && currentMonth > today.getMonth())
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

  // Handle day click
  const handleDayClick = (day) => {
    if (
      currentYear === today.getFullYear() &&
      currentMonth === today.getMonth() &&
      day < currentDay
    ) {
      return; // Prevent picking past days in the current month
    }
    const selected = new Date(currentYear, currentMonth, day);
    const formattedDate = getFormattedDate(currentMonth, day, currentYear);
    setInputValue(formattedDate);
    setIsPickerVisible(false);
    if (onDateChange) onDateChange(selected);
  };

  const handleInputClick = () => {
    setIsPickerVisible((prev) => !prev); // Toggle picker visibility on input click
  };

  // Generate days for the calendar
  const days = [];
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

  for (let i = 1; i <= daysInMonth; i++) {
    const isCurrentDay =
      i === currentDay &&
      currentMonth === today.getMonth() &&
      currentYear === today.getFullYear();
    const isDisabled =
      currentYear === today.getFullYear() &&
      currentMonth === today.getMonth() &&
      i < currentDay; // Disable days before the current day

    days.push(
      <div
        key={`current-${i}`}
        className={`flex-1 flex items-center justify-center p-2 cursor-pointer hover:bg-gray-200 rounded-lg ${
          isCurrentDay ? "bg-blue-300" : ""
        } ${isDisabled ? "text-gray-300 cursor-not-allowed" : ""}`}
        onClick={() => !isDisabled && handleDayClick(i)}
      >
        {i}
      </div>
    );
  }

  const totalSlots = days.length > 35 ? 42 : 35;
  const remainingSlots = totalSlots - days.length;
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

  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  const handleMonthSelect = (index, currentYear) => {
    setCurrentMonth(index);
    setCurrentYear(currentYear);
    setIsMonthYearPickerVisible(false);
  };
  return (
    <div
      className="relative bg-gray-50 border-gray-200 rounded-md w-full"
      ref={inputRef}
    >
      {/* Input Field */}
      <div className="relative" onClick={handleInputClick}>
        <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400">
          <InsertInvitationIcon />
        </div>
        <input
          type="text"
          placeholder="MM/DD/YYYY"
          className={`border border-gray-300 p-2 py-3 pl-10 pr-10 rounded-md placeholder:text-gray-700 w-full focus:outline-none`}
          readOnly
          value={inputValue}
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800">
          <KeyboardArrowDownIcon />
        </div>
      </div>

      {/* Conditionally render DatePicker */}
      {isPickerVisible && (
        <div className="absolute top-full left-0 z-10 w-full flex justify-center">
          <div className="bg-white border border-gray-300 rounded-md w-[300px] p-2">
            <div className="flex justify-between items-center mb-2">
              <button onClick={handlePrevMonth} className="text-lg">
                &#8592;
              </button>
              <h2
                className="text-sm cursor-pointer"
                onClick={() =>
                  setIsMonthYearPickerVisible(!isMonthYearPickerVisible)
                }
              >
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
              <MonthYearPicker
                currentYear={currentYear}
                currentMonth={currentMonth}
                onMonthSelect={handleMonthSelect}
              />
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
        </div>
      )}
    </div>
  );
};

export default DatePicker;
