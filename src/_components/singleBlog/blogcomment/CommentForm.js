import React from "react";
import ClickTextBtn from "../../buttons/ClickTextBtn";
import SimpleInput from "../../elements/formelements/SimpleInput";
import styles from "./blogcomments.module.css";
import SimpleHookInput from "../../elements/formelements/SimpleHookInput";
export default function CommentForm() {
  const handelChange = async () => {};
  return (
    <div className={styles.comment_input_wrapper}>
      <div className={styles.input_wrapper}>
        <SimpleHookInput
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
  );
}
