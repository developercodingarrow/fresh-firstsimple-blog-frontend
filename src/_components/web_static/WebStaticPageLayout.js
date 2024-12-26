import React from "react";
import styles from "./webstaticpage.module.css";
export default function WebStaticPageLayout({ children }) {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.children_wrapper}>{children}</div>
      </div>
    </div>
  );
}
