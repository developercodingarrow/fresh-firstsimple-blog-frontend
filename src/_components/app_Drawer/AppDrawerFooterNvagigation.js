"use client";
import React, { useRef, useContext, useEffect } from "react";
import styles from "./mobileappdrawer.module.css";
import Link from "next/link";
export default function AppDrawerFooterNvagigation() {
  const appDrawerFooterOptions = [
    {
      text: "Privacy policy",
      hrfLink: "privacy-policy",
    },
    {
      text: "Terms",
      hrfLink: "terms-and-conditions",
    },
    {
      text: "Contact support",
      hrfLink: "contact-us",
    },
  ];

  return (
    <div className={styles.officla_pages}>
      {appDrawerFooterOptions.map((el, index) => {
        return (
          <Link href={`${el.hrfLink}`} className={styles.tiny_link} key={index}>
            {el.text}
          </Link>
        );
      })}
    </div>
  );
}
