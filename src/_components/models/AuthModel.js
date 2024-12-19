"use client";
import React, { useContext, useEffect } from "react";
import styles from "./css/model.module.css";
import { AuthContext } from "@/src/_contextApi/authContext";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import ModelHeader from "./modelElements/ModelHeader";
import ModelCommanFooter from "./modelElements/ModelCommanFooter";
import GoogleAuthClient from "../googleAuth/GoogleAuthClient";
import Link from "next/link";

export default function AuthModel() {
  const { authUser } = useContext(AuthContext);
  const { isAuthModel, handelCloseAuthModel } = useContext(ModelsContext);
  return (
    <>
      {isAuthModel && (
        <div className={styles.model_full_container}>
          <div className={styles.auth_model_container}>
            <ModelHeader
              modelTitle="Login Or Register"
              modelCloseHandler={handelCloseAuthModel}
            />
            <div className={styles.auth_model_innerBody}>
              <div className={styles.heading_wrapper}>
                <h1>Let's Start</h1>
              </div>
              <div
                className={`large__text text_color_gray text_center ${styles.sub_heading} `}
              >
                Register or log in with Google or our easy-to-use form and start
                your journey with us today
              </div>
              <div className={styles.auth_links_wrapper}>
                <div>
                  <GoogleAuthClient />
                </div>
                <Link href={"/auth/login"} className={styles.auth_inkBox}>
                  Sign in using Email
                </Link>
              </div>
              <div className={styles.create_account_footer}>
                If you have no acount ?{" "}
                <span>
                  {" "}
                  <Link href={"/auth/signup"}>Create</Link>{" "}
                </span>
              </div>
            </div>
            {/* <ModelCommanFooter modelCloseHandler={handelCloseAuthModel} /> */}
          </div>
        </div>
      )}
    </>
  );
}
