"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import styles from "./css/appnavbar.module.css";
import { createBlogFirstAction } from "@/src/app/utils/blogsAction";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function ActionNavigation() {
  const { pageLoading, setpageLoading } = useContext(AppContext);
  const router = useRouter();
  const handelCreateBlogAction = async () => {
    try {
      setpageLoading(true);
      const res = await createBlogFirstAction();
      console.log(res);
      if (res.data.status === "success") {
        console.log(res.data.result._id);
        router.push(`/content/${res.data.result._id}`);
        setpageLoading(false);
      }
    } catch (error) {
      console.log(error);
      setpageLoading(false);
    }
  };

  return (
    <div
      className={`${styles.navigation_linkStyle} medium__text text_color_bold_gray`}
      onClick={handelCreateBlogAction}
    >
      Write
    </div>
  );
}
