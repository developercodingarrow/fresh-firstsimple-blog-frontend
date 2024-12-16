"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./blogcomments.module.css";
import ReplyItem from "./ReplyItem";

export default function RepliesList(props) {
  const { replies, comentID, handelDelete } = props;

  return (
    <div className={styles.replies_list}>
      <div className={styles.reply_item}>
        {replies.map((el, index) => {
          return (
            <ReplyItem
              data={el}
              key={index}
              handelDelete={handelDelete}
              comentid={comentID}
            />
          );
        })}
      </div>
    </div>
  );
}
