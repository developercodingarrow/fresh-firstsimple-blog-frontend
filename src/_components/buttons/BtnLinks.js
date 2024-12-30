import React from "react";
import styles from "./css/btnStyles.module.css";
import Link from "next/link";
export default function BtnLinks(props) {
  const {
    linkText,
    hrflink,
    btnType = "fill_type_btn",
    size = "medium",
  } = props;
  return (
    <Link
      href={hrflink}
      className={`${styles.link_style} ${styles[btnType]}  ${styles[size]} capitalize_text  `}
    >
      {linkText}
    </Link>
  );
}
