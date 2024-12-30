import React from "react";
import styles from "./css/actiondot.module.css";
export default function ThreeDotActionDropDown(props) {
  const { actionList = [], actionId, slug, closeHandel } = props;

  const handelAction = async (actionHandler, actionId, slug) => {
    // Wait for the action to complete if it's a promise
    actionHandler(actionId, slug);
    // Close the dropdown after the action is completed
    closeHandel();
  };

  return (
    <div className={styles.action_drop_box}>
      {" "}
      <div className={styles.action_list_wrapper}>
        {actionList.map((action, index) => (
          <div
            key={index}
            className={`${styles.action_item} tiny_text text_color_bold_gray`}
            onClick={() => handelAction(action.handler, actionId, slug)}
          >
            <div className={styles.text_wrapper}>{action.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
