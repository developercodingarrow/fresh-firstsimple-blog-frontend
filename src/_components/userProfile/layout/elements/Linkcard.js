import React from "react";
import styles from "./css/followsocialmediacard.module.css";
import { TbWorldWww } from "../../../ApplicationIcons";
export default function Linkcard() {
  return (
    <div className={styles.main_container}>
      <div className={styles.link_inner_container}>
        <div
          className={`${styles.card_title} capitalize_text mg_botom_sm section_medium_heading`}
        >
          <h3>Business Website</h3>
        </div>
        <div className={styles.icon_text_box}>
          <div className={styles.icon_box}>
            <TbWorldWww />{" "}
          </div>
          <div className="medium__text text_color_gray">medium.com</div>
        </div>
      </div>
    </div>
  );
}
