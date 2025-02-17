"use client";
import React, { useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";
import styles from "./css/appnavbar.module.css";
import { createBlogFirstAction } from "@/src/app/utils/blogsAction";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function ActionNavigation() {
  const { setpageLoading } = useContext(AppContext);
  const router = useRouter();
  const pathname = usePathname(); // Track current pathname

  useEffect(() => {
    // When pathname changes, stop loading
    setpageLoading(false);
  }, [pathname]);

  const handelCreateBlogAction = async () => {
    try {
      setpageLoading(true);
      const res = await createBlogFirstAction();

      if (res.error) {
        toast.error(res.error);
        setpageLoading(false);
        return;
      }

      if (res.data.status === "success") {
        router.push(`/content/${res.data.result._id}`, undefined, {
          shallow: true,
        });

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
      <Toaster
        toastOptions={{
          className: "medium__text ",
        }}
      />
      Write
    </div>
  );
}
