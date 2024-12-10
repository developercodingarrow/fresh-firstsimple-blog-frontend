"use client";
import React, { forwardRef } from "react";
import styles from "./css/inputsStyles.module.css";

function HookInput(props, ref) {
  const { lable, inputType, inputSize = "medium", ...inputProps } = props;
  return (
    <div className={styles.inputHook_container}>
      <div className={styles.lable_wraper}>
        <label className={`${styles.lable_style} capitalize_text`}>
          {lable}
        </label>
      </div>
      <div className={styles.input_wrapper}>
        <input
          ref={ref}
          {...inputProps}
          suppressHydrationWarning={true}
          className={`${styles.input_style} ${styles[inputSize]}`}
        />
      </div>
    </div>
  );
}

export default forwardRef(HookInput);
