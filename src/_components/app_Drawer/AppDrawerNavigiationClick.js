"use client";
import React from "react";
import styles from "./appdrwaernavigatin.module.css";
import { FaList, CiCirclePlus } from "../ApplicationIcons";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { createBlogFirstAction } from "@/src/app/utils/blogsAction";

export default function AppDrawerNavigiationClick() {
  const router = useRouter();
  const pathname = usePathname();
  const appDrawerOptions = [
    {
      text: "Create",
      icon: <CiCirclePlus />,
    },
  ];

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
