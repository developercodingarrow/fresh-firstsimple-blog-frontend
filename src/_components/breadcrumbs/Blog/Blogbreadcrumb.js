import React from "react";
import styles from "../css/Blogbreadcrumb.module.css";
import { MdKeyboardArrowRight } from "../../ApplicationIcons";
export default function Blogbreadcrumb(props) {
  const { pageTitle } = props;
  return (
    <div className={styles.flex_conatainer}>
      <span
        className={`${styles.breadcumb_box} medium__text text_color_bold_gray`}
      >
        Home
      </span>
      <span
        className={`${styles.breadcumb_box}  medium__text text_color_bold_gray`}
      >
        {" "}
        <MdKeyboardArrowRight />{" "}
      </span>
      <span
        className={`${styles.breadcumb_box} medium__text text_color_bold_gray`}
      >
        {pageTitle}
      </span>
    </div>
  );
}
