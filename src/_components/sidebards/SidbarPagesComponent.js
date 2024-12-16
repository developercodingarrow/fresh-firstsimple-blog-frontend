import React from "react";
import styles from "./css/sidebarcomponents.module.css";
import BtnLinks from "../buttons/BtnLinks";
export default function SidbarPagesComponent(props) {
  const { sectionTitle, listData, linkTextName, hrflinkName, path } = props;

  return (
    <div className={styles.component_container}>
      <div>
        <div className="capitalize_text mg_botom_sm section_medium_heading">
          {sectionTitle}
        </div>
        <div className={styles.topic_list}>
          {listData.map((el, index) => {
            return (
              <BtnLinks
                linkText={el[linkTextName]}
                hrflink={`/${path}/${el[hrflinkName]}`}
                size="tag_links"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
