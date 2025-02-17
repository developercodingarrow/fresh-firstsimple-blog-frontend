"use client";
import React, { useContext, useEffect } from "react";
import styles from "./appdrwaernavigatin.module.css";
import { FaList, CiCirclePlus } from "../ApplicationIcons";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { createBlogFirstAction } from "@/src/app/utils/blogsAction";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function AppDrawerNavigiationClick() {
  const { setpageLoading } = useContext(AppContext);
  const router = useRouter();
  const pathname = usePathname();
  const appDrawerOptions = [
    {
      text: "Create",
      icon: <CiCirclePlus />,
    },
  ];

  useEffect(() => {
    // When pathname changes, stop loading
    setpageLoading(false);
  }, [pathname]);

  const handelCreateBlogAction = async () => {
    try {
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
    <div>
      {appDrawerOptions.map((el, index) => {
        const isActive = pathname === "/content";
        return (
          <div
            key={index}
            className={`${styles.aside_nav_item} small_text  ${
              isActive ? styles.active_link : ""
            }`}
            onClick={handelCreateBlogAction}
          >
            <div className={styles.nav_item_left}>
              <div className={styles.nav_item_menu_icon}> {el.icon}</div>
              <div className={`${styles.nav_item_menu_text} `}>{el.text}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
