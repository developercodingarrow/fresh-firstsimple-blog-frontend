import React from "react";
import styles from "./css/tabbar.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "../ApplicationIcons";
import Link from "next/link";

export default function TabBar(props) {
  const { data } = props;
  return (
    <div className={styles.tab_container}>
      <div className={styles.arrow_box}>
        <MdKeyboardArrowLeft />{" "}
      </div>
      <div className={styles.tab_links_wrapper}>
        {data.map((el, index) => {
          return (
            <Link
              href={el.hrflink}
              key={index}
              className={`${styles.tab_links} text_color_gray medium__text semi_bold_text`}
            >
              {el.text}
            </Link>
          );
        })}
      </div>
      <div className={styles.arrow_box}>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
}
