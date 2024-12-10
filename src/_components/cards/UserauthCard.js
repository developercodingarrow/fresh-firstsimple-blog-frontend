import React from "react";
import styles from "./css/UserauthCard.module.css";
import { BsThreeDotsVertical } from "../ApplicationIcons";
export default function UserauthCard() {
  return (
    <div className={styles.main_container}>
      <div className={`${styles.card_title_box} mg_botom_sm`}>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing sit amet,
          consectetur adipiscing elit
        </h2>
      </div>
      <div className={styles.card_footer}>
        <div className="text_color_gray small_text">2-Aug-2024</div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  );
}
