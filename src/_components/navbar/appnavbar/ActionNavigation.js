"use client";
import React from "react";
import { useRouter } from "next/navigation";
import styles from "./css/appnavbar.module.css";
import { createBlogFirstAction } from "@/src/app/utils/blogsAction";

export default function ActionNavigation() {
  const router = useRouter();
  const handelCreateBlogAction = async () => {
    try {
      const res = await createBlogFirstAction();
      if (res.data.status === "success") {
        console.log(res.data.result._id);
        router.push(`/content/${res.data.result._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={styles.navigation_linkStyle}
      onClick={handelCreateBlogAction}
    >
      Write
    </div>
  );
}
