"use server";
import axios from "axios";
import { cookies } from "next/headers"; // Import the cookies function
import CryptoJS from "crypto-js";
import { API_BASE_URL } from "@/config";

const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;

// 9) Update USER PROFILE API
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
      return { data: res.data };
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

// 10) Update USER PROFILE PIC API
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
      return { data: res.data };
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
// 11) Remove USER PROFILE PIC API
export async function userImgRemove() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/user/remove-user-profile-pic`;
  const method = "post";
  try {
    const res = await axios({
      method,
      url,
      headers: {
        Authorization: `Bearer ${authToken}`, // Add Authorization header
      },
      withCredentials: true,
    });

    if (res.data.status === "success") {
      return { data: res.data };
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

export async function updateUserDetail(data) {
  const userData = JSON.stringify(data);
  const encryptedData = CryptoJS.AES.encrypt(
    userData,
    encryptionKey
  ).toString();

  // Store the encrypted data in cookies
  cookies().set("user", encryptedData, {
    httpOnly: false,
  });
}
