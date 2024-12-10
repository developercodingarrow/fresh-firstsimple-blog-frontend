"use client";
import React from "react";
import styles from "./css/verificationui.module.css";
import useCustomeAuthForm from "@/src/_custome-hooks/useCustomeAuthForm";
import ClickTextBtn from "../buttons/ClickTextBtn";

export default function VerificationUi(props) {
  const { formInputs, formType, formHeading, formSubText } = props;
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(formInputs, formType);

  const handleForm = () => {
    alert("form submit");
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.form_wrapper_container}>
          <div className={styles.container_header}>
            <div className={styles.heading_box}>
              <h3>{formHeading}</h3>
            </div>
            <div className={"medium__text capitalize_text"}>{formSubText}</div>
          </div>
          <div className={styles.form_wrraper}>
            <form onSubmit={handleSubmit(handleForm)}>
              <div className={styles.form_input_wrapper}>
                {updatedInputs.map((input, index) => {
                  return (
                    <div key={index} className={styles.form_input_filedBox}>
                      {renderInput(input)}

                      {errors[input.name] && (
                        <span className={"input_errors tiny_text"}>
                          {errors[input.name].message}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className={styles.submit_btn_wrapper}>
                <ClickTextBtn
                  btnText="OTP VERIFICATION"
                  fullWidth={true}
                  size="medium"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
