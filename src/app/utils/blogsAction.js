"use server";
import axios from "axios";
import { cookies } from "next/headers"; // Import the cookies function
import CryptoJS from "crypto-js";
import { API_BASE_URL } from "@/config";

export const tagfillterBlogs = async (query, page) => {
  const limit = 100; // Static limit value
  let url = `${API_BASE_URL}/blog/all-public-blogs`;
  const method = "get";

  const queryParams = [];
  if (query) {
    queryParams.push(`tag=${query}`);
  }
  if (page) {
    queryParams.push(`page=${page}`);
  }
  if (limit) {
    queryParams.push(`limit=${limit}`);
  }

  if (queryParams.length > 0) {
    url += `?${queryParams.join("&")}`;
  }
  try {
    const res = await axios({
      method,
      url,
      withCredentials: true,
    });

    if (res.data.status === "success") {
      return res.data;
    } else {
      return []; // Return an empty array if not successful
    }
  } catch (error) {
    if (error.response) {
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
};

export const tagBlogsAction = async (slug) => {
  let url = `${API_BASE_URL}/blog/public-tag-blogs/${slug}`;
  const method = "get";

  try {
    const res = await axios({
      method,
      url,
      withCredentials: true,
    });

    if (res.data.status === "success") {
      return res.data;
    } else {
      return []; // Return an empty array if not successful
    }
  } catch (error) {
    if (error.response) {
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
};

export async function createBlogFirstAction() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/blog/first-action-create-blog`;
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

export async function userPublisedBlogsAction(authToken) {
  const url = `${API_BASE_URL}/blog/user-published-blogs`;
  const method = "get";
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
      return res.data; // Return the 'results' array
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

export async function userDraftBlogsAction(authToken) {
  const url = `${API_BASE_URL}/blog/user-draft-blogs`;
  const method = "get";
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
      return res.data; // Return the 'results' array
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

export async function updateToDraft(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/blog/update-to-draft`;
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

export async function deleteBlogAction(formData) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/blog/delete-blog`;
  const method = "delete";
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

export async function updateBlogContent(formData, slug) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/blog/update-blog-content/${slug}`;
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

export async function getSingleAuthBlog(slug) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/blog/get-single-blog/${slug}`;
  const method = "get";
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
      return res.data; // Return the 'results' array
    } else {
      return {}; // Return an empty array if not successful
    }
  } catch (error) {
    if (error.response) {
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
}

export async function UpdateBlogThumblin(formData, projectId) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/blog/update-blog-thumblin/${projectId}`;
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

export async function upadteBlogTags(formData, slug) {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value;
  const url = `${API_BASE_URL}/blog/update-blog-tags/${slug}`;
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

export const featuresideBlogs = async () => {
  let url = `${API_BASE_URL}/blog/featured-side-blogs`;
  const method = "get";

  try {
    const res = await axios({
      method,
      url,
      withCredentials: true,
    });

    if (res.data.status === "success") {
      return res.data.result;
    } else {
      return []; // Return an empty array if not successful
    }
  } catch (error) {
    if (error.response) {
      return { error: error.response.data.message || "Unknown error" };
    }
    return { error: error.message || "Request failed" };
  }
};
