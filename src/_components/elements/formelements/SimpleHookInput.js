"use client";
import React from "react";
import styles from "./css/inputsStyles.module.css";

export default function SimpleHookInput(props) {
  const {
    register,
    registerFiled,
    inputType,
    inputPlaceholder,
    inputValue,
    inputName,
    inputChnageHandler,
    inputSize = "medium",
  } = props;
  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      className={`${styles.input_style} ${styles[inputSize]}`}
      value={inputValue}
      name={inputName} // Make sure to set the name attribute
      {...register({ registerFiled })}
    />
  );
}
