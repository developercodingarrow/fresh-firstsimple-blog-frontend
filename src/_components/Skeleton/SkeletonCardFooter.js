import React from "react";
import styles from "./css/Skeleton.module.css";
export default function SkeletonCardFooter() {
  return (
    <div className={styles.card_footer}>
      <span className={styles.footer_action}></span>
      <span className={styles.footer_action}></span>
      <span className={styles.footer_action}></span>
    </div>
  );
}
