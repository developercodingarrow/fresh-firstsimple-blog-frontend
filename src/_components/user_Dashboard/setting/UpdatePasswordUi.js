"use client";
import React, { useContext, useState } from "react";
import styles from "./updatepasswordui.module.css";
import toast, { Toaster } from "react-hot-toast";
import googleImg from "../../../../public/web-static-img/Google_Icons.webp";
import Image from "next/image";
import useCustomeAuthForm from "@/src/_custome-hooks/useCustomeAuthForm";
import SubmitBtn from "../../buttons/SubmitBtn";
import { updatePasswordInputs } from "@/src/jsonData/updatePasswordData";
import { updatePassword } from "@/src/app/utils/userAuthaction";
import { AppContext } from "@/src/_contextApi/AppContext";
import { AuthContext } from "@/src/_contextApi/authContext";

export default function UpdatePasswordUi() {
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const { renderInput, handleSubmit, updatedInputs, isValid, errors } =
    useCustomeAuthForm(updatePasswordInputs, "resetPassword");
  const { authUser } = useContext(AuthContext);

  const handleForm = async (data) => {
    try {
      setisBtnLoadin(true);
      const res = await updatePassword(data);

      if (res.error) {
        toast.error(res.error);
        setisBtnLoadin(false);
        return;
      }
      toast.success(res.data.message);
      setisBtnLoadin(false);
    } catch (error) {
      console.log(error);
      setisBtnLoadin(false);
    }
  };
  return (
    <div className={styles.container}>
      <Toaster
        toastOptions={{
          className: "medium__text ",
        }}
      />

      {authUser?.authBy === "googleAuth" && (
        <section className={styles.google_auth_section}>
          <div className={"medium__text "}>
            Your account is registered with Google Auth. Please use your Google
            account to log in and access your account
          </div>
          <div>
            {" "}
            <div className={styles.auth_img_wrraper}>
              <Image
                src={googleImg}
                alt="google-icon-image"
                width={500}
                height={500}
                className={styles.img_style}
              />
            </div>
          </div>
        </section>
      )}

      {authUser?.authBy === "form" && (
        <section className={styles.form_section}>
          <div className={"section_medium_heading mg_botom_lg"}>
            Update Password
          </div>
          <div className={styles.section_container}>
            <div className={styles.form_container}>
              <form onSubmit={handleSubmit(handleForm)}>
                <div className={styles.form_input_wrapper}>
                  {updatedInputs.map((input, index) => {
                    return (
                      <div key={index} className={"mg_botom_lg"}>
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
                    btnLoading={isBtnLoadin}
                    disabledBtn={!isValid}
                  />
                </div>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
