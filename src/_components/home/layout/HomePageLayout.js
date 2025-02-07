import React from "react";
import styles from "./css/homepagelayout.module.css";
import TabBar from "../../tabs/TabBar";
import SidbarPagesComponent from "../../sidebards/SidbarPagesComponent";
import { tagList, guidlin } from "@/src/jsonData/staticData";

export default function HomePageLayout({ children, featuredTags }) {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.sidebar_container}>
          <div className="mg_botom_lg ">
            <SidbarPagesComponent
              sectionTitle="blog Topics"
              listData={
                featuredTags && featuredTags.length > 0 ? featuredTags : tagList
              }
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
          <div>
            <TabBar
              data={
                featuredTags && featuredTags.length > 0 ? featuredTags : tagList
              }
              linkTextName="tagName"
              hrflinkName="tagSlug"
              stickypos={50}
              redirectType="query"
            />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
