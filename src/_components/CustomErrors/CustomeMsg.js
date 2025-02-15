import React from "react";
import Link from "next/link";
import styles from "./customeerror.module.css";

export default function CustomeMsg(props) {
  const { msg = "No Content Found" } = props;
  return (
    <div className={styles.container}>
      <p className={"medium__text"}>{msg}</p>
    </div>
  );
}
