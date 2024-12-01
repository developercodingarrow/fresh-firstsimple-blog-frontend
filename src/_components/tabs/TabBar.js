import React from "react";
import styles from "./css/tabbar.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "../ApplicationIcons";
import Link from "next/link";

export default function TabBar() {
  return (
    <div className={styles.tab_container}>
      <div className={styles.arrow_box}>
        <MdKeyboardArrowLeft />{" "}
      </div>
      <div className={styles.tab_links_wrapper}>
        <Link
          href={"/"}
          className={`${styles.tab_links} text_color_gray medium__text semi_bold_text`}
        >
          {" "}
          Technology
        </Link>
        <Link
          href={"/"}
          className={`${styles.tab_links} text_color_gray medium__text semi_bold_text`}
        >
          {" "}
          Food
        </Link>
        <Link
          href={"/"}
          className={`${styles.tab_links} text_color_gray medium__text semi_bold_text`}
        >
          {" "}
          Fashion
        </Link>
        <Link
          href={"/"}
          className={`${styles.tab_links} text_color_gray medium__text semi_bold_text`}
        >
          {" "}
          Technology
        </Link>
        <Link
          href={"/"}
          className={`${styles.tab_links} text_color_gray medium__text semi_bold_text`}
        >
          {" "}
          Automobiles
        </Link>
        <Link
          href={"/"}
          className={`${styles.tab_links} text_color_gray medium__text semi_bold_text`}
        >
          {" "}
          Automobiles
        </Link>
      </div>
      <div className={styles.arrow_box}>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
}
