import React from "react";
import styles from "./tagbloglayout.module.css";
import SidbarPagesComponent from "../sidebards/SidbarPagesComponent";
export default function TagBlogsLayout({ children }) {
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

  const guidlin = [
    {
      text: "Website Traffic",
      hrflink: "/",
    },

    {
      text: "Content Write Tips",
      hrflink: "/",
    },
    {
      text: "top website",
      hrflink: "/",
    },
  ];
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.sidebar_container}>
          <div className="mg_botom_lg ">
            <SidbarPagesComponent
              sectionTitle="blog Topics"
              listData={tagList}
            />
          </div>

          <div className="mg_botom_lg ">
            <SidbarPagesComponent
              sectionTitle="Guid articles"
              listData={guidlin}
            />
          </div>
        </div>
        <div className={styles.content_container}>
          <div className={styles.page_tag_wrapper}>
            <div className={styles.page_tag}>Programing</div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
