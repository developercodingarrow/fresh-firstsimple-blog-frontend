import React from "react";
import styles from "./blogtopicwrapper.module.css";
import TagSearch from "../tagSearch/TagSearch";
import Link from "next/link";
export default function BlogTopicWrapper() {
  return (
    <div className={styles.main_container}>
      <div className={styles.flex_header}>
        <div className={styles.heading_box}>
          <h1>Browse Blog Toipc</h1>
        </div>
        <div className={styles.search_box}>
          <TagSearch />
        </div>
      </div>
      <div className={styles.tag_wrapper}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15].map(() => {
          return (
            <Link href={"/"} className={styles.tag_box}>
              java Script
            </Link>
          );
        })}
      </div>
    </div>
  );
}
