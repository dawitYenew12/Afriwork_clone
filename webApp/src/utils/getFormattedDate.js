export const getFormattedDate = (monthIndex, day, year) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Function to get the suffix for the day (st, nd, rd, th)
  const getDaySuffix = (day) => {
    if (day > 3 && day < 21) return "th"; // For 11th, 12th, 13th, etc.
    switch (day % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  // Get the month name
  const monthName = months[monthIndex];

  // Get the day with the correct suffix
  const dayWithSuffix = `${day}${getDaySuffix(day)}`;

  // Format the date string
  return `${monthName} ${dayWithSuffix}, ${year}`;
};
