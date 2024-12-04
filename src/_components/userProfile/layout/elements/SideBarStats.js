import React from "react";
import styles from "./css/followsocialmediacard.module.css";
import { IoReaderOutline } from "../../../ApplicationIcons";

export default function SideBarStats() {
  return (
    <div className={styles.main_container}>
      <div className={styles.link_inner_container}>
        <div
          className={`${styles.card_title} capitalize_text mg_botom_sm section_medium_heading`}
        >
          <h3>Blogs</h3>
        </div>
        <div className={styles.icon_text_box}>
          <div className={`${styles.number_box} medium__text`}>25</div>
          <div className="medium__text text_color_gray">Total Blogs</div>
        </div>
      </div>
    </div>
  );
}
