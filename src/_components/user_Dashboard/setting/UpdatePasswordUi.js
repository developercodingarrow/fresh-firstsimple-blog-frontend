"use client";
import React, { useContext, useState } from "react";
import styles from "./updatepasswordui.module.css";
import googleImg from "../../../../public/web-static-img/Google_Icons.webp";
import Image from "next/image";
import useCustomeAuthForm from "@/src/_custome-hooks/useCustomeAuthForm";
import SubmitBtn from "../../buttons/SubmitBtn";
import { updatePasswordInputs } from "@/src/jsonData/updatePasswordData";
import { updatePassword } from "@/src/app/utils/userAuthaction";

export default function UpdatePasswordUi() {
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(updatePasswordInputs, "resetPassword");

  const handleForm = async (data) => {
    try {
      const res = await updatePassword(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.container}>
      {" "}
      <section className={styles.google_auth_section}>
        <div className={styles.google_auth_subHeading}>
          Your account is registered with Google Auth. Please use your Google
          account to log in and access your account
        </div>
        <div>
          {" "}
          <div className={styles.auth_img_wrraper}>
            <Image
              src={googleImg}
              width={500}
              height={500}
              className={styles.img_style}
            />
          </div>
        </div>
      </section>
      <section className={styles.form_section}>
        <div className={styles.section_heading}>
          <h3>Update Password</h3>
        </div>
        <div className={styles.section_container}>
          <div className={styles.form_container}>
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
                  btnText="Update Password"
                  fullWidth={true}
                  size="medium"
                  btnLoading={false}
                />
              </div>
            </form>
          </div>
          <div>details constin</div>
        </div>
      </section>
    </div>
  );
}
