import Link from "next/link";
import React from "react";
import styles from "./css/appnavbar.module.css";

export default function NavigationLinks() {
  const navigationLinks = [
    {
      text: "Home",
      hrfLink: "/",
    },
    {
      text: "Tags",
      hrfLink: "/",
    },
    {
      text: "About",
      hrfLink: "/",
    },
    {
      text: "blogs",
      hrfLink: "/",
    },
    {
      text: "Story",
      hrfLink: "/",
    },
  ];

  return (
    <div className={styles.navigation_link_box}>
      {navigationLinks.map((el, index) => {
        return (
          <Link href={"/"} className={styles.navigation_linkStyle}>
            {el.text}
          </Link>
        );
      })}
    </div>
  );
}
