import React from "react";
import styles from "./tagsearch.module.css";
import { HiMagnifyingGlass } from "../../ApplicationIcons";
export default function TagSearch() {
  return (
    <div className={styles.search_container}>
      <div className={styles.search_iconBox}>
        <HiMagnifyingGlass />
      </div>
      <div className={styles.search_input_box}>
        <input className={styles.search_input} placeholder="search..." />
      </div>
    </div>
  );
}
