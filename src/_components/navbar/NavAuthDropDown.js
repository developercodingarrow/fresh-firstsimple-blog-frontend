"use client";
import React from "react";
import styles from "./navlogo.module.css";
import Link from "next/link";
import { LogOutAction } from "@/src/app/utils/userAuthaction";
import { useRouter } from "next/navigation";
export default function NavAuthDropDown(props) {
  const router = useRouter();
  const { data } = props;

  const dropOptions = [
    {
      option: "Dashbord",
      hrfLink: "me/profile",
    },
    {
      option: "Blogs",
      hrfLink: "me/blogs/public",
    },
    {
      option: "Setting",
      hrfLink: "me/blogs/public",
    },
  ];

  const handellogOut = async () => {
    try {
      const res = await LogOutAction();
      console.log(res);
      if (res.data.status === "success") {
        router.refresh();
      }
    } catch (error) {}
  };

  return (
    <div className={styles.auth_dropdown_container}>
      <div className={styles.drop_header}>
        <div className="medium__text">{data?.name}</div>
        <div className="tiny_text text_color_gray">{data?.userName}</div>
      </div>
      <div className={styles.drop_option_wrapper}>
        {dropOptions.map((el, index) => {
          return (
            <Link
              href={`${el.hrfLink}`}
              className={`small_text text_color_gray  ${styles.drop_option_link}`}
            >
              {el.option}
            </Link>
          );
        })}
      </div>
      <div className={styles.auth_drop_footer_wrapper}>
        <div className={styles.auth_drop_logOut_btn} onClick={handellogOut}>
          Log out
        </div>
      </div>
    </div>
  );
}
