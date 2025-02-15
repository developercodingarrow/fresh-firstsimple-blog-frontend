import React, { useContext } from "react";
import styles from "../css/model.module.css";
import { IoCloseSharp, MdDelete } from "../../ApplicationIcons";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function ModelHeader(props) {
  const { modelTitle, modelCloseHandler } = props;
  const { setisBtnLoadin } = useContext(AppContext);
  const handelColse = () => {
    modelCloseHandler();
    setisBtnLoadin(false);
  };

  return (
    <div className={styles.model_header}>
      <div className={"section_medium_heading"}>{modelTitle}</div>
      <div
        className={`icon_box text_color_gray  medium__text`}
        onClick={handelColse}
      >
        <IoCloseSharp />{" "}
      </div>
    </div>
  );
}
