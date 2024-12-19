import React from "react";
import styles from "./tagbloglayout.module.css";
import SidbarPagesComponent from "../sidebards/SidbarPagesComponent";
export default function TagBlogsLayout({ children, featuredTags }) {
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
      hrflink: "website-traffic",
    },

    {
      text: "Content Write Tips",
      hrflink: "content-write-tips",
    },
    {
      text: "top website",
      hrflink: "top-website",
    },
  ];
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.sidebar_container}>
          <div className="mg_botom_lg ">
            <SidbarPagesComponent
              sectionTitle="blog Topics"
              listData={featuredTags}
              linkTextName="tagName"
              hrflinkName="tagSlug"
              path="tag"
            />
          </div>

          <div className="mg_botom_lg ">
            <SidbarPagesComponent
              sectionTitle="Guid articles"
              listData={guidlin}
              linkTextName="text"
              hrflinkName="hrflink"
              path="seo"
            />
          </div>
        </div>
        <div className={styles.content_container}>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
