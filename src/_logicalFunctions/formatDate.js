// export const formatDate = (dateString) => {
//   const options = { year: "numeric", month: "short", day: "numeric" };
//   const formattedDate = new Date(dateString).toLocaleDateString(
//     "en-US",
//     options
//   );
//   return formattedDate;
// };

import { format } from "date-fns";

export const formatDate = (dateString) => {
  try {
    return format(new Date(dateString), "dd MMM, yyyy"); // Example: Dec 17, 2024
  } catch (error) {
    console.error("Invalid date string:", dateString);
    return ""; // Fallback for invalid dates
  }
};
