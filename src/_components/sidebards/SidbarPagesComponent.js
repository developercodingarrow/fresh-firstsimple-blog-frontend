import React from "react";
import styles from "./css/sidebarcomponents.module.css";
import BtnLinks from "../buttons/BtnLinks";
export default function SidbarPagesComponent(props) {
  const {
    sectionTitle,
    listData = [],
    linkTextName,
    hrflinkName,
    path,
  } = props;

  return (
    <div className={styles.component_container}>
      <div>
        <div className="capitalize_text mg_botom_sm section_medium_heading">
          {sectionTitle}
        </div>
        <div>
          {listData.length > 1 ? (
            listData.map((el, index) => (
              <BtnLinks
                key={
                  index
                } /* Always include a unique key when rendering lists */
                linkText={el[linkTextName]}
                hrflink={`/${path}/${el[hrflinkName]}`}
                size="tag_links"
              />
            ))
          ) : (
            <>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => {
                return (
                  <div className="side_link_skeleton" key={index}>
                    {" "}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
