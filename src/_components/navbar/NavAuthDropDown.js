"use client";
import React from "react";
import styles from "./navlogo.module.css";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { LogOutAction } from "@/src/app/utils/userAuthaction";
import { useRouter } from "next/navigation";
export default function NavAuthDropDown(props) {
  const router = useRouter();
  const { data } = props;

  const dropOptions = [
    {
      option: "Dashbord",
      hrfLink: "/me/profile",
    },
    {
      option: "Blogs",
      hrfLink: "/me/blogs/public",
    },
    {
      option: "Setting",
      hrfLink: "/me/settings",
    },
  ];

  const handellogOut = async () => {
    try {
      const res = await LogOutAction();
      if (res.error) {
        toast.error(res.error);
        return;
      }

      if (res.data.status === "success") {
        router.refresh();
        toast.success("You’ve been successfully logged out");
      }
    } catch (error) {
      toast.error("Oops! Something went wrong.");
    }
  };

  return (
    <div
      className={styles.auth_dropdown_container}
      onClick={(e) => e.stopPropagation()}
    >
      <Toaster
        toastOptions={{
          className: "medium__text ",
        }}
      />
      <Link
        href={`/user-profile/${data?.userName}`}
        className={styles.drop_header}
      >
        <div className="medium__text">{data?.name}</div>
        <div className="tiny_text text_color_gray">{data?.userName}</div>
      </Link>
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
        <div
          className={`${styles.auth_drop_logOut_btn} medium__text`}
          onClick={handellogOut}
        >
          Log out
        </div>
      </div>
    </div>
  );
}
