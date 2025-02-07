import React from "react";
import styles from "./appdrwaernavigatin.module.css";
import {
  FaList,
  GoHomeFill,
  BiSolidPurchaseTagAlt,
  IoMdInformationCircle,
} from "../ApplicationIcons";
import { usePathname } from "next/navigation";
import Link from "next/link";
export default function AppDrawerNavigationLinks() {
  const pathname = usePathname();
  const appDrawerOptions = [
    {
      text: "Home",
      icon: <GoHomeFill />,
      hrfLink: "/",
    },
    {
      text: "Tags",
      icon: <BiSolidPurchaseTagAlt />,
      hrfLink: "/blog-topics",
    },
    {
      text: "About",
      icon: <IoMdInformationCircle />,
      hrfLink: "/about-us",
    },
  ];
  return (
    <div>
      {appDrawerOptions.map((el, index) => {
        const isActive = pathname === el.hrfLink;
        return (
          <Link
            href={`${el.hrfLink}`}
            key={index}
            className={`${styles.aside_nav_item} small_text  ${
              isActive ? styles.active_link : ""
            }`}
          >
            <div className={styles.nav_item_left}>
              <div className={styles.nav_item_menu_icon}> {el.icon}</div>
              <div className={`${styles.nav_item_menu_text} `}>{el.text}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
