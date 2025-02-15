import React from "react";
import styles from "../../../page.module.css";
import { API_BASE_URL } from "@/config";
import CustomeMsg from "@/src/_components/CustomErrors/CustomeMsg";
import NotDataFound from "@/src/_components/CustomErrors/NotDataFound";

export default async function UserAboutpage(pathname) {
  const slug = pathname.params?.slug;

  let data;
  try {
    // Fetch the web stats using the auth token
    const res = await fetch(`${API_BASE_URL}/user-profile/user-bio/${slug}`, {
      method: "GET",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      cache: "no-store", // 🚀 Ensure fresh data
    });
    const initialdata = await res.json();
    if (initialdata.status === "Fails") {
      return <CustomeMsg msg={initialdata.message} />;
    }

    if (initialdata.status === "success") {
      data = initialdata.result.bio;
    }
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`);
  }

  return (
    <div>
      {data && (
        <div
          dangerouslySetInnerHTML={{
            __html: data, // Ensure this HTML is safe
          }}
          className={styles.content_text}
        ></div>
      )}
    </div>
  );
}
