import React from "react";
import styles from "./css/UserauthCard.module.css";
import { BsThreeDotsVertical } from "../ApplicationIcons";
import UserpublishCardDotWraaper from "../actiondote/UserpublishCardDotWraaper";
import DraftCardWrapper from "../actiondote/DraftCardWrapper";
import { formatDate } from "@/src/_logicalFunctions/formatDate";

export default function DraftBlogCard(props) {
  const { data } = props;
  const date = formatDate(data?.createdAt);
  return (
    <div className={styles.main_container}>
      <div className={`${styles.card_title_box} mg_botom_sm`}>
        <h2>{data.blogTitle}</h2>
      </div>
      <div className={styles.card_footer}>
        <div className="text_color_gray small_text">{date}</div>
        <div>
          <DraftCardWrapper elementID={data._id} />
        </div>
      </div>
    </div>
  );
}
