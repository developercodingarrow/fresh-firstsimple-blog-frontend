import React from "react";
import styles from "../page.module.css";
import MainCard from "@/src/_components/home/card/MainCard";
import { tagBlogsAction } from "@/src/app/utils/blogsAction";
import { API_BASE_URL } from "@/config";

export default async function TagBlogspage(pathname) {
  const slug = pathname.params?.slug;

  const formatSlug = (slug) => {
    if (!slug) return "";
    return slug
      .split("-") // Split the string by hyphens
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join the words with spaces
  };
  let data;
  try {
    // Fetch the web stats using the auth token

    const res = await fetch(`${API_BASE_URL}/blog/public-tag-blogs/${slug}`, {
      method: "GET", // GET request to fetch the blog
      credentials: "include", // Include cookies in the request
      headers: {
        "Content-Type": "application/json", // Ensure this is set to JSON
      },
    });

    const initalData = await res.json();

    if (initalData.status === "success") {
      data = initalData.result;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    data = null;
  }

  return (
    <div className="mg_botom_lg">
      <div className={styles.page_tag_wrapper}>
        <div className={styles.page_tag}>
          {" "}
          {formatSlug(slug)} <span>-</span> <span> {data.length}</span>{" "}
        </div>
      </div>
      {data.map((el, index) => {
        return <MainCard data={el} key={index} />;
      })}
    </div>
  );
}
