"use client";
import React, { useContext, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/verificationui.module.css";
import useCustomeAuthForm from "@/src/_custome-hooks/useCustomeAuthForm";
import SubmitBtn from "../buttons/SubmitBtn";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function VerificationUi(props) {
  const params = useParams();
  const { slug } = params;
  const { formInputs, formType, formHeading, formHandel, formSubText } = props;
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(formInputs, formType);

  const handleForm = async (data) => {
    try {
      setisBtnLoadin(true);
      const res = await formHandel(data, slug);

      if (res.error) {
        toast.error(res.error);
        setisBtnLoadin(false);
        return;
      }
      if (res.data.status === "success") {
        toast.success(res.data.message);
        setisBtnLoadin(false);
      }
    } catch (error) {
      setisBtnLoadin(false);
    }
  };
  return (
    <div className={styles.main_container}>
      <Toaster />
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
                <SubmitBtn
                  btnText="OTP VERIFICATION"
                  fullWidth={true}
                  size="large"
                  btnLoading={isBtnLoadin}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
