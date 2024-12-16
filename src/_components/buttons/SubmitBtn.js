"use client";
import React, { useContext } from "react";
import styles from "./css/btnStyles.module.css";

export default function SubmitBtn(props) {
  const {
    btnText,
    disabledBtn,
    btnLoading = false, // Default is not loading
    size = "medium", // Default size
    btnType = "fill_type_btn",
    fullWidth = false, // Default is not full width
  } = props;
  return (
    <div className={styles.btn_wrapper}>
      <button
        type="submit"
        className={`${styles.btn_style}  ${styles[btnType]} ${styles[size]} ${
          fullWidth ? styles.fullWidth : ""
        } ${btnLoading ? "loading" : ""}`}
        disabled={disabledBtn || btnLoading} // Disable button during loading
      >
        {btnLoading && <span className={styles.spinner}></span>}
        <span>{btnText}</span>
      </button>
    </div>
  );
}
