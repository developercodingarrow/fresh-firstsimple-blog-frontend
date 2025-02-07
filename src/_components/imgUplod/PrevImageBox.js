"use client";
import React from "react";
import styles from "./singleImgUplod.module.css";

export default function PrevImageBox(props) {
  const { boxtext } = props;

  return (
    <div className={styles.image_upod_box}>
      <p>{boxtext}</p>
    </div>
  );
}
