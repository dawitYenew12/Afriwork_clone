/* eslint-disable react/prop-types */
import React, { useState, useEffect, useRef } from "react";

const DownArrowIcon = ({ isOpen }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      stroke="#222"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={isOpen ? "transform rotate-180 transition-transform" : ""}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

const CloseIcon = () => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      stroke="#fff"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );
};

function CustomSelect({
  options,
  isMulti,
  isSearchable,
  placeholder,
  onChange,
  align,
  Icon,
}) {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedOption, setSelectedOption] = useState(isMulti ? [] : null);
  const [searchValue, setSearchValue] = useState(isSearchable ? "" : "");
  const [focused, setFocused] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});  
  const searchRef = useRef();
  const inputRef = useRef();
  const menuRef = useRef();

  const calculateMenuPosition = () => {
    if (!inputRef.current || !menuRef.current) return;

    const inputRect = inputRef.current.getBoundingClientRect();
    const distanceFromTop = inputRect.top;
    const bottom = inputRect.bottom;
    const distanceFromBottom = window.innerHeight - bottom;

    if (distanceFromBottom >= distanceFromTop) {
      console.log("toBottom: ", inputRect);
      console.log(bottom - distanceFromTop);
      return { top: bottom - distanceFromTop };
    } else {
      console.log("toTop: ", inputRect);
      return { bottom: bottom - inputRect.top + 2 };
    }
  };

  useEffect(() => {
    if (showMenu) {
      const position = calculateMenuPosition();
      setMenuStyle(position);
    }
  }, [showMenu]);

  useEffect(() => {
    if (isSearchable) {
      setSearchValue(""); // Reset search value
    }
    if (showMenu && searchRef.current && isSearchable) {
      searchRef.current.focus(); // Focus on search input when menu opens
    }
  }, [showMenu, isSearchable]);

  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const handleInputClick = () => {
    setFocused(false);
    setShowMenu((prev) => !prev);
  };

  const getDisplay = () => {
    if (
      !selectedOption ||
      (Array.isArray(selectedOption) && selectedOption.length === 0)
    ) {
      return placeholder;
    }

    if (isMulti) {
      return (
        <div className="flex flex-wrap gap-1">
          {selectedOption.map((option, index) => (
            <div
              key={`${option.value}-${index}`}
              className="flex items-center bg-blue-500 text-white rounded-full py-1 px-3 text-sm"
            >
              {option.label}
              <span
                onClick={(e) => onTagRemove(e, option)}
                className="ml-2 cursor-pointer text-white"
              >
                <CloseIcon />
              </span>
            </div>
          ))}
        </div>
      );
    }
    return selectedOption.label;
  };

  const removeOption = (option) => {
    return selectedOption.filter((opt) => opt.value !== option.value);
  };

  const onTagRemove = (e, option) => {
    e.stopPropagation();
    const newValue = removeOption(option);
    setSelectedOption(newValue);
    onChange(newValue);
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setShowMenu(false);
  };

  const onItemClick = (e, option) => {
    let newOption;
    if (isMulti) {
      if (selectedOption.findIndex((opt) => opt.value === option.value) >= 0) {
        newOption = removeOption(option);
      } else {
        newOption = [...selectedOption, option];
      }
    } else {
      newOption = option;
    }
    setSelectedOption(newOption);
    onChange(newOption);
    if (isSearchable) {
      setSearchValue("");
    }
    if (inputRef.current) {
      setFocused(true);
      inputRef.current.focus();
    }
  };

  const isSelected = (option) => {
    if (isMulti) {
      return selectedOption.some((opt) => opt.value === option.value);
    }
    return selectedOption?.value === option.value;
  };

  const onSearch = (e) => {
    setSearchValue(e.target.value); // Update search input state
  };

  const getOptions = () => {
    if (!isSearchable || !searchValue) {
      return options; // If not searchable, or no search value, return all options
    }

    return options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
  };

  return (
    <div className="relative">
      <div
        tabIndex="0"
        ref={inputRef}
        onClick={handleInputClick}
        className={`pl-12 flex items-center justify-between border border-gray-300 p-[13px] rounded-md cursor-pointer focus:outline-none ${
          focused ? "focus:ring-2 focus:ring-red-500" : ""
        }`}
      >
        <div
          className={`text-sm ${
            !selectedOption || selectedOption.length === 0
              ? "text-gray-800"
              : "text-black"
          }`}
        >
          {getDisplay()}
        </div>
        <div className="flex items-center">
          <DownArrowIcon isOpen={showMenu} />
        </div>
        <Icon className="absolute text-gray-300 w-8 h-8 left-3" />
      </div>

      {showMenu && (
        <div
        ref={menuRef}
          className={`absolute z-50 left-4 mt-1 w-[110px] border border-black bg-white shadow-lg rounded-md ${
            align === "auto" ? "" : `text-${align}`
          }`}
          onClick={handleClick}
          style={menuStyle}

        >
          {isSearchable && (
            <div className="px-2 py-1">
              <input
                className="w-full p-2 border rounded-md"
                onChange={onSearch}
                value={searchValue}
                ref={searchRef}
                placeholder="Search..."
              />
            </div>
          )}
          <div
            className="max-h-80 overflow-y-auto p-1 rounded-md"
          >
            {getOptions().map((option) => (
              <div
                onClick={(e) => onItemClick(e, option)}
                key={option.value}
                className={`flex justify-center mb-[1px] px-4 py-1 text-sm cursor-pointer hover:bg-blue-50 rounded-md ${
                  isSelected(option) ? "bg-blue-50" : ""
                }`}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
