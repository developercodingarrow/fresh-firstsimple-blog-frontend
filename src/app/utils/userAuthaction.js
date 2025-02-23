"use server";
import axios from "axios";
import { cookies } from "next/headers"; // Import the cookies function
import CryptoJS from "crypto-js";
import { API_BASE_URL } from "@/config";
const encryptionKey = process.env.NEXT_PUBLIC_ENCRYPTION_KEY;

// (1 User Registeraion API
export async function userRegisterAction(formData) {
  const url = `${API_BASE_URL}/user-auth/sing-up`;
  const method = "post";
  try {
    const res = await axios({
      method,
      url,
      data: formData,
      withCredentials: true,
    });

    return { data: res.data };
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

// (2 User OTP API verification API
export async function userotpVerfication(formData, slug) {
  const url = `${API_BASE_URL}/user-auth/verify-otp/${slug}`;
  const method = "post";
  try {
    // const res = await performAPIAction(method, url, formData, authToken);
    const res = await axios({
      method,
      url,
      data: formData,
      withCredentials: true,
    });

    const token = res.data.token;
    const userDetail = res.data.user;
    if (token) {
      cookies().set("jwt", token); // Store the token in cookies

      // Encrypt the user details using AES encryption
      const userData = JSON.stringify(userDetail);
      const encryptedData = CryptoJS.AES.encrypt(
        userData,
        encryptionKey
      ).toString();

      // Store the encrypted data in cookies
      cookies().set("user", encryptedData, {
        httpOnly: false,
      });
    }

    return { data: res.data };
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
// (3 User Forgote Password API
export async function userfogotePasswordAction(formData) {
  const url = `${API_BASE_URL}/user-auth/forgot-password`;
  const method = "post";
  try {
    const res = await axios({
      method,
      url,
      data: formData,
      withCredentials: true,
    });

    return { data: res.data };
  } catch (error) {
    if (error.response && error.response.data) {
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
// (4 User Reset Password API
export async function userResetPasswordAction(formData, slug) {
  const url = `${API_BASE_URL}/user-auth/reset-password/${slug}`;
  const method = "post";
  try {
    const res = await axios({
      method,
      url,
      data: formData,
      withCredentials: true,
    });

    return { data: res.data };
  } catch (error) {
    if (error.response && error.response.data) {
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
// (5 User Form Login API
export async function userLoginAction(formData) {
  const url = `${API_BASE_URL}/user-auth/login`;
  const method = "post";

  try {
    const res = await axios({
      method,
      url,
      data: formData, // Send form data in the request body
      withCredentials: true, // If cookies or auth tokens are needed
    });

    const token = res.data.token;
    const userDetail = res.data.user;

    if (token && userDetail?.role === "user") {
      cookies().set("jwt", token); // Store the token in cookies

      // Encrypt the user details using AES encryption
      const userData = JSON.stringify(userDetail);
      const encryptedData = CryptoJS.AES.encrypt(
        userData,
        encryptionKey
      ).toString();

      // Store the encrypted data in cookies
      cookies().set("user", encryptedData, {
        httpOnly: false,
      });
      return { data: res.data };
    } else {
      return { error: "Login credentials are incorrect.", statusCode: 401 };
    }
  } catch (error) {
    if (error.response) {
      // Handle rate limit error differently
      if (error.response.status === 429) {
        return {
          error: error.response.statusText || "Too Many Requests",
          statusCode: 429,
        };
      } else {
        return {
          error: error.response.data.message || "Something went wrong",
          statusCode: error.response.status || 500,
        };
      }
    } else {
      return {
        error: error.message || "Request failed",
        statusCode: error.response.status || 500,
      };
    }
  }
}

// (6 User Google Auth Login API
export async function userGoogleLoginAction(googleCredential) {
  const url = `${API_BASE_URL}/user-auth/google-login`;
  const method = "post";

  try {
    // Send Google token to your Express API
    const res = await axios({
      method,
      url,
      data: { token: googleCredential }, // Pass the Google credential here
      withCredentials: true, // If cookies or auth tokens are needed
    });

    const token = res.data.token;
    const userDetail = res.data.user;

    if (token) {
      cookies().set("jwt", token); // Store the token in cookies

      // Encrypt the user details using AES encryption
      const userData = JSON.stringify(userDetail);
      const encryptedData = CryptoJS.AES.encrypt(
        userData,
        encryptionKey
      ).toString();

      // Store the encrypted data in cookies
      cookies().set("user", encryptedData, {
        httpOnly: false,
      });
    }

    return res.data; // Return response data
  } catch (error) {
    if (error.response && error.response.data) {
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

// ------------------User Protected Routes------------------------
// (7 User Update Password API
export async function updatePassword(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/user-auth/update-new-password`;
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
    if (error.response && error.response.data) {
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

// (8 User LogOut API
export async function LogOutAction() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/user-auth/logout`;
  const method = "post";

  try {
    const res = await axios({
      method,
      url,
      headers: {
        Authorization: `Bearer ${authToken}`, // Add Authorization header
      },
      withCredentials: true, // Send cookies with request
    });

    // Remove the cookies by setting them with a past expiration date
    const cookieStore = cookies();
    cookieStore.set("jwt", "", { expires: new Date(0) });
    cookieStore.set("user", "", { expires: new Date(0) });
    cookieStore.set("g_state", "", { expires: new Date(0) });

    return { status: "success", data: res.data };
  } catch (error) {
    if (error.response && error.response.data) {
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
