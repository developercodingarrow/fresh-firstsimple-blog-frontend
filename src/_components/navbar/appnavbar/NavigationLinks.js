import Link from "next/link";
import React from "react";
import styles from "./css/appnavbar.module.css";
import ActionNavigation from "./ActionNavigation";

export default function NavigationLinks() {
  const navigationLinks = [
    {
      text: "Home",
      hrfLink: "/",
    },
    {
      text: "Tags",
      hrfLink: "/blog-topics",
    },
    {
      text: "About",
      hrfLink: "/about",
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
          <Link
            href={`${el.hrfLink}`}
            key={index}
            className={`${styles.navigation_linkStyle} medium__text semi_bold_text`}
          >
            {el.text}
          </Link>
        );
      })}
      <ActionNavigation />
    </div>
  );
}
