import React from "react";
import styles from "./css/homepagelayout.module.css";
import BtnLinks from "../../buttons/BtnLinks";
import TabBar from "../../tabs/TabBar";
export default function HomePageLayout({ children }) {
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
      text: "Health & Wellness",
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
      text: "Food & Beverage",
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
          <div className={`${styles.component_container} mg_botom_lg `}>
            <div>
              <div className="capitalize_text mg_botom_lg section_medium_heading">
                blog Topics
              </div>
              <div className={styles.topic_list}>
                {tagList.map((el, index) => {
                  return (
                    <BtnLinks
                      linkText={el.text}
                      hrflink={el.hrflink}
                      size="tag_links"
                    />
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.component_container}>
            <div>
              <div className="capitalize_text mg_botom_lg section_medium_heading">
                Guid and Tool
              </div>
              <div className={styles.topic_list}>
                {guidlin.map((el, index) => {
                  return (
                    <BtnLinks
                      linkText={el.text}
                      hrflink={el.hrflink}
                      size="tag_links"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content_container}>
          <div>
            <TabBar />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
