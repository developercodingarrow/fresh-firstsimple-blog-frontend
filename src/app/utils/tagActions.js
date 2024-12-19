"use server";
import axios from "axios";
import { cookies } from "next/headers"; // Import the cookies function
import CryptoJS from "crypto-js";
import { API_BASE_URL } from "@/config";

export async function featuredTagsListAction() {
  const url = `${API_BASE_URL}/tag/featured-tags`;
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
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
}

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
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
}
