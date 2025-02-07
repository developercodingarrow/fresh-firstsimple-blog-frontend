import React from "react";
import styles from "./css/followsocialmediacard.module.css";
import { TbWorldWww } from "../../../ApplicationIcons";
import Link from "next/link";
export default function Linkcard(props) {
  const { data, filedName, cardTitle, iconlink } = props;
  return (
    <div className={styles.main_container}>
      {iconlink ? (
        <div className={styles.link_inner_container}>
          <div
            className={`${styles.card_title} capitalize_text mg_botom_sm section_medium_heading`}
          >
            <h3>{cardTitle}</h3>
          </div>
          <div className={styles.icon_text_box}>
            <Link href={`${iconlink}`} className={styles.icon_box}>
              <TbWorldWww />{" "}
            </Link>
          </div>
        </div>
      ) : (
        <div
          className={`${styles.card_title} capitalize_text mg_botom_sm section_medium_heading`}
        >
          <h3>{cardTitle} not Updated</h3>
        </div>
      )}
    </div>
  );
}
