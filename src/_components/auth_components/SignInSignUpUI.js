"use client";
import React, { useContext, useState } from "react";
import styles from "./css/authcomponents.module.css";
import useCustomeAuthForm from "@/src/_custome-hooks/useCustomeAuthForm";
import ClickTextBtn from "../buttons/ClickTextBtn";
import Link from "next/link";
export default function SignInSignUpUI(props) {
  const { formInputs, formType, forgotpasswordLink } = props;
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(formInputs, formType);

  const handleForm = () => {
    alert("form submit");
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.Intro_Column}>
          <div>
            <h2>Go Finance</h2>
            <div>The most popular website for content writing</div>
            <div></div>
          </div>
        </div>
        <div className={styles.AuthColumn}>
          <div className={styles.authColum_innerContainer}>
            <div className={styles.form_header}>
              {" "}
              <div className={`${styles.form_heading} mg_botom_sm`}>
                <h2>Create an account</h2>
              </div>
              <div
                className={`${styles.form_subheading} mg_botom_sm  medium__text text_color_gray`}
              >
                Register your account !
              </div>
            </div>
            <div className={styles.auth_form_wrapper}>
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
                  {forgotpasswordLink && (
                    <div className={styles.forgot_pass_link_wrapper}>
                      <Link
                        href={`/${forgotpasswordLink}`}
                        className={styles.forgot_pass_link}
                      >
                        forgot password
                      </Link>
                    </div>
                  )}
                </div>
                <div className={styles.submit_btn_wrapper}>
                  <ClickTextBtn
                    btnText="Register"
                    fullWidth={true}
                    size="medium"
                  />
                </div>
              </form>
            </div>
            <div className={styles.auth_seprate}>
              <span className={styles.single_line}></span>
              <span className="medium_text_wrapper">Or With</span>
              <span className={styles.single_line}></span>
            </div>
            <div className={`${styles.google_auth_wrapper} mg_botom_lg `}>
              Google auth
            </div>

            <div
              className={`${styles.form_redirection_info_wrapper} mg_botom_lg`}
            >
              <span>Already have an Account? </span>{" "}
              <span>
                {" "}
                <Link href={`/`}>Login </Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
