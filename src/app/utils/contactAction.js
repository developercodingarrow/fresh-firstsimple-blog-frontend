"use server";
import axios from "axios";
import { API_BASE_URL } from "@/config";
import { cookies } from "next/headers"; // Import the cookies function

export async function newContactEnquire(formData) {
  const url = `${API_BASE_URL}/contact/send-contact-info`;
  const method = "post";
  try {
    const res = await axios({
      method,
      url,
      data: formData,
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
