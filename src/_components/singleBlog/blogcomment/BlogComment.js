"use client";
import React from "react";
import styles from "./blogcomments.module.css";
import SimpleInput from "../../elements/formelements/SimpleInput";
import ClickTextBtn from "../../buttons/ClickTextBtn";
import CommentItem from "./CommentItem";
export default function BlogComment() {
  const handelChange = async () => {};
  return (
    <div className={styles.main_container}>
      <div className={`mg_botom_lg section_medium_heading`}>Comment</div>
      <div className={styles.comment_input_wrapper}>
        <div className={styles.input_wrapper}>
          <SimpleInput
            inputPlaceholder="Add a Comment...."
            inputValue={""}
            inputName="comment"
            inputChnageHandler={handelChange}
            inputSize="small"
          />
        </div>
        <div className={styles.btn_wrapper}>
          <ClickTextBtn btnText="Comment" size="small" />
        </div>
      </div>
      <div className={styles.comment_list}>
        <div className={styles.comment_item}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
            return <CommentItem />;
          })}
        </div>
      </div>
    </div>
  );
}
