import React from "react";
import styles from "./css/Skeleton.module.css";
export default function SkeletonThreeDote() {
  return (
    <div className={styles.three_dotBox}>
      {" "}
      <span className={styles.dote}></span>{" "}
      <span className={styles.dote}></span>{" "}
      <span className={styles.dote}></span>{" "}
    </div>
  );
}
