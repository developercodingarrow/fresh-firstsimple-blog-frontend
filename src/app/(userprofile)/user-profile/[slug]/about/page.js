import React, { Suspense } from "react";
import styles from "../../../page.module.css";
import { API_BASE_URL } from "@/config";
import NotDataFound from "@/src/_components/CustomErrors/NotDataFound";

export default async function UserAboutpage(pathname) {
  const slug = pathname.params?.slug;

  let data;
  try {
    // Fetch the web stats using the auth token
    const res = await fetch(`${API_BASE_URL}/user/user-bio/${slug}`, {
      method: "GET", // GET request to fetch the blog
      credentials: "include", // Include cookies in the request
      headers: {
        "Content-Type": "application/json", // Ensure this is set to JSON
      },
    });

    console.log("user profile-aout us---", res);

    const initalData = await res.json();
    if (initalData.status === "success") {
      if (initalData.result.bio.trim().length <= 3) {
        data = {
          bio: "<p>User has not updated their bio yet.</p>",
        };
      } else {
        data = initalData.result;
      }
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    data = {
      bio: "<p>User has not updated their bio yet.</p>",
    };
  }

  console.log("about-user---", data);

  return (
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: data.bio, // Ensure this HTML is safe
        }}
        className={styles.content_text}
      ></div>
    </div>
  );
}
