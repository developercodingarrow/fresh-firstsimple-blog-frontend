"use client";
import React, { useContext, useEffect } from "react";
import styles from "./css/singleblogactionbar.module.css";
import { IoEyeOutline } from "../ApplicationIcons";
import { blogViewCountAction } from "@/src/app/utils/blogLikeActions";
export default function ViewCount(props) {
  const { data } = props;
  const handleViewCount = async () => {
    try {
      const lastViewTimestamp = localStorage.getItem(`blog_view_${data.slug}`);
      const currentTime = Date.now();

      // Allow API call only if more than 1 minute has passed since the last view
      if (!lastViewTimestamp || currentTime - lastViewTimestamp > 60000) {
        const res = await blogViewCountAction(data.slug);
        if (res.data.status === "success") {
          // Update the timestamp in localStorage
          localStorage.setItem(`blog_view_${data.slug}`, currentTime);
        }
      } else {
        console.log("View count not updated (less than 1 minute)");
      }
    } catch (error) {
      console.error("Error updating view count:", error);
    }
  };

  // Increment the view count when the component mounts
  useEffect(() => {
    if (data?.slug) {
      handleViewCount();
    }
  }, [data?.slug]);
  return (
    <div className={styles.card_icon_details}>
      <div className={styles.icon_box}>
        {" "}
        <IoEyeOutline />{" "}
      </div>

      <div className={styles.icon_details}>{data?.viewCount}</div>
    </div>
  );
}
