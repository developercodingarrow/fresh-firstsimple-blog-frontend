import React from "react";
import styles from "../css/model.module.css";
import { IoCloseSharp, MdDelete } from "../../ApplicationIcons";

export default function ModelHeader(props) {
  const { modelTitle, modelCloseHandler } = props;
  return (
    <div className={styles.model_header}>
      <div className={"section_medium_heading"}>{modelTitle}</div>
      <div
        className={`icon_box text_color_gray semi_bold_text`}
        onClick={modelCloseHandler}
      >
        {" "}
        <IoCloseSharp />{" "}
      </div>
    </div>
  );
}
