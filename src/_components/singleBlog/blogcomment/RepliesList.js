import React from "react";
import styles from "./blogcomments.module.css";
import ReplyItem from "./ReplyItem";
// import CommentItem from "./CommentItem";

export default function RepliesList() {
  return (
    <div className={styles.replies_list}>
      <div className={styles.reply_item}>
        <ReplyItem />
      </div>
    </div>
  );
}
