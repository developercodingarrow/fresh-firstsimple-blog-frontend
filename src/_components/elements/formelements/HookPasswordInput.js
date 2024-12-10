"use client";
import React, { forwardRef, useState } from "react";
import styles from "./css/inputsStyles.module.css";
import { IoEyeOff, IoEye } from "../../ApplicationIcons";
import Link from "next/link";

function HookPasswordInput(props, ref) {
  const {
    lable,
    inputType,
    type,
    inputLink,
    inputSize = "small",
    ...inputProps
  } = props;
  const [passInputType, setpassInputType] = useState(type);

  const handelShowpassword = () => {
    setpassInputType("text");
  };

  const handelHidePassword = () => {
    setpassInputType("password");
  };
  return (
    <div className={styles.passInput_hook_container}>
      <div className={styles.lable_wraper}>
        <label className={styles.lable_style}>{lable}</label>
      </div>
      <div className={styles.Password_input_wrapper}>
        <input
          type={passInputType}
          ref={ref}
          {...inputProps}
          suppressHydrationWarning={true}
          className={`${styles.pass_input_style} ${styles[inputSize]}`}
        />
        <div className={styles.passInput_icon_wrapper}>
          {passInputType === "password" ? (
            <IoEyeOff onClick={handelShowpassword} />
          ) : (
            <IoEye onClick={handelHidePassword} />
          )}
        </div>
      </div>
    </div>
  );
}

export default forwardRef(HookPasswordInput);
