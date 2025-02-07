import { format } from "date-fns";

export const formatDate = (dateString) => {
  if (!dateString) return ""; // Prevents passing undefined or null to format
  try {
    return format(new Date(dateString), "dd MMM, yyyy");
  } catch (error) {
    console.error("Invalid date string:", dateString);
    return "";
  }
};
