import React from "react";
import styles from "./blogtopicwrapper.module.css";
import TagSearch from "../tagSearch/TagSearch";
import Link from "next/link";
export default function BlogTopicWrapper() {
  const tagList = [
    {
      text: "Real Estate",
      hrflink: "/real-estate",
    },
    {
      text: "Technology",
      hrflink: "/technology",
    },
    {
      text: "Health",
      hrflink: "/health-wellness",
    },
    {
      text: "Education",
      hrflink: "/education",
    },
    {
      text: "Finance",
      hrflink: "/finance",
    },
    {
      text: "Travel",
      hrflink: "/travel",
    },
    {
      text: "Food & beverage",
      hrflink: "/food-beverage",
    },
    {
      text: "Entertainment",
      hrflink: "/entertainment",
    },
    {
      text: "Fashion",
      hrflink: "/fashion",
    },
    {
      text: "Automobiles",
      hrflink: "/automobiles",
    },
  ];

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
        {tagList.map((el, index) => {
          return (
            <Link href={`/${el.hrflink}`} className={styles.tag_box}>
              {el.text}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
