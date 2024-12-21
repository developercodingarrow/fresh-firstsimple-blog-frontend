"use client";
import React, { useContext, useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/authcomponents.module.css";
import useCustomeAuthForm from "@/src/_custome-hooks/useCustomeAuthForm";
import ClickTextBtn from "../buttons/ClickTextBtn";
import Link from "next/link";
import SubmitBtn from "../buttons/SubmitBtn";
import { AppContext } from "@/src/_contextApi/AppContext";
import GoogleAuthClient from "../googleAuth/GoogleAuthClient";

export default function SignInSignUpUI(props) {
  const router = useRouter();
  const {
    formInputs,
    formType,
    formHandel,
    btnText,
    userAuthData,
    footerText,
    footerLink,
    suHeading,
    forgotpasswordLink,
  } = props;
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(formInputs, formType);

  const handleForm = async (data) => {
    try {
      setisBtnLoadin(true);
      const res = await formHandel(data);
      if (res.error) {
        toast.error(res.error);
        setisBtnLoadin(false);
        return;
      }
      // Proceed if there is no error and res.data exists
      if ((res.data.status = "success")) {
        if (res.data.apiFor === "register") {
          toast.success(res.data.message);
          router.push(`/auth/opt-verification/${res.data.UrlToken}`);
          setisBtnLoadin(false);
        } else if (res.data.apiFor === "Login") {
          toast.success(res.data.message);
          router.push("/");
          setisBtnLoadin(false);
        }
      }
    } catch (error) {
      setisBtnLoadin(false);
    }
  };
  return (
    <div className={styles.main_container}>
      <Toaster />
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
                  <SubmitBtn
                    btnText={btnText}
                    fullWidth={true}
                    size="large"
                    btnLoading={isBtnLoadin}
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
              <GoogleAuthClient userAuthData={userAuthData} />
            </div>

            <div
              className={`${styles.form_redirection_info_wrapper} small_text mg_botom_lg`}
            >
              <span>{suHeading} </span>{" "}
              <span>
                {" "}
                <Link href={`/${footerLink}`}>{footerText} </Link>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
