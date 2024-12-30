import React from "react";
import styles from "./css/maincard.module.css";
import { FaHeart, IoEyeOutline, FaComment } from "../../ApplicationIcons";
export default function MainCardFooter(props) {
  const { data } = props;
  return (
    <div className={styles.card_footer}>
      <div className={styles.card_icon_details}>
        <div className={`${styles.icon_box} small_text text_color_gray`}>
          <FaHeart />
        </div>
        <div className={`${styles.icon_details} small_text text_color_gray `}>
          {data?.likes?.length}
        </div>
      </div>
      <div className={styles.card_icon_details}>
        <div className={`${styles.icon_box} small_text text_color_gray`}>
          {" "}
          <IoEyeOutline />{" "}
        </div>

        <div className={styles.icon_details}>{data?.viewCount}</div>
      </div>
      <div className={styles.card_icon_details}>
        <div className={`${styles.icon_box} small_text text_color_gray`}>
          <FaComment />
        </div>
        <div className={`${styles.icon_details} small_text text_color_gray `}>
          {data?.comments?.length}{" "}
        </div>
      </div>
    </div>
  );
}
