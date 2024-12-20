import React from "react";
import styles from "./css/btnStyles.module.css";
import Link from "next/link";
export default function BtnLinks(props) {
  const { linkText, hrflink, size = "medium" } = props;
  return (
    <Link
      href={hrflink}
      className={`${styles.link_style} capitalize_text  ${styles[size]}`}
    >
      {linkText}
    </Link>
  );
}
