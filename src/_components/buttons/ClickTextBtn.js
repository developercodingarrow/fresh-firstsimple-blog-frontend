"use client";
import React, { useContext } from "react";
import styles from "./css/btnStyles.module.css";
import BtnLoading from "../loading_elements/BtnLoading";
// import { ModelsContext } from "@/_contextApi/ModelContextApi";

export default function ClickTextBtn(props) {
  const {
    btnText,
    disabledBtn,
    btnLoading = false, // Default is not loading
    size = "medium", // Default size
    btnType = "fill_type_btn",
    fullWidth = false, // Default is not full width
    clickHandel,
    actionID,
  } = props;
  //   const { actionID } = useContext(ModelsContext);

  const handelClick = () => {
    if (!disabledBtn) {
      //   clickHandel(actionID);
      clickHandel(actionID);
    }
  };

  return (
    <div className={styles.btn_wrapper}>
      <button
        type="button"
        className={`${styles.btn_style}  ${styles[btnType]} ${styles[size]} ${
          fullWidth ? styles.fullWidth : ""
        } ${btnLoading ? "loading" : ""}`}
        disabled={disabledBtn || btnLoading} // Disable button during loading
        onClick={handelClick}
      >
        {btnLoading ? <BtnLoading spinerSize={size} /> : <span>{btnText}</span>}
      </button>
    </div>
  );
}
