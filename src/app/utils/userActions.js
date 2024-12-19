"use server";
import axios from "axios";
import { cookies } from "next/headers"; // Import the cookies function
import CryptoJS from "crypto-js";
import { API_BASE_URL } from "@/config";

export async function updateUser(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/user/update-user-profile`;
  const method = "post";
  try {
    const res = await axios({
      method,
      url,
      data: formData,
      headers: {
        Authorization: `Bearer ${authToken}`, // Add Authorization header
      },
      withCredentials: true,
    });

    if (res.data.status === "success") {
      console.log(res.data);
      return { data: res.data };
    }
  } catch (error) {
    if (error.response) {
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
}

export async function userDetailsPublic(slug) {
  const url = `${API_BASE_URL}/user/user-details/${slug}`;
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
      return {}; // Return an empty Object if not successful
    }
  } catch (error) {
    if (error.response) {
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
}

export async function updateUserProfilePic(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/user/update-user-profile-pic`;
  const method = "patch";

  try {
    const res = await axios({
      method,
      url,
      data: formData,
      headers: {
        Authorization: `Bearer ${authToken}`, // Add Authorization header
      },
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      withCredentials: true,
    });

    if (res.data.status === "success") {
      console.log(res.data);
      return { data: res.data };
    }
  } catch (error) {
    if (error.response) {
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
}


