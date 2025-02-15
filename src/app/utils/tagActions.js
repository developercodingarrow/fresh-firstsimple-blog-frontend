"use server";
import axios from "axios";
import { API_BASE_URL } from "@/config";
import { cookies } from "next/headers"; // Import the cookies function

// 16) GET Featured Tag API
export async function featuredTagsListAction() {
  const cookieStore = cookies();
  const storedTags = cookieStore.get("featuredTags")?.value;

  if (storedTags) {
    return JSON.parse(storedTags); // Return cached data
  }

  try {
    const res = await axios.get(`${API_BASE_URL}/tag/featured-tags`, {
      withCredentials: true,
    });

    if (res.data.status === "success") {
      return res.data.results; // Return fetched results
    }
  } catch (error) {
    console.error("Error fetching featured tags:", error);
  }

  return []; // Return an empty array if failed
}

// 17) GET Verified Tag API
export async function verifiedTagsListAction() {
  const url = `${API_BASE_URL}/tag/Verification-tags`;
  const method = "get";
  try {
    const res = await axios({
      method,
      url,
      withCredentials: true,
    });

    if (res.data.status === "success") {
      return res.data.results; // Return the 'results' array
    } else {
      return []; // Return an empty array if not successful
    }
  } catch (error) {
    if (error.response) {
      return {
        error: error.response.data.message || "Unknown error",
        statusCode: error.response.status || 500,
      };
    }
    return {
      error: error.message || "Request failed",
      statusCode: 500,
    };
  }
}
