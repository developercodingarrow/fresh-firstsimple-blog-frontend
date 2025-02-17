"use client";
import React, { useRef, useContext, useEffect } from "react";
import styles from "./mobileappdrawer.module.css";
import { AppContext } from "@/src/_contextApi/AppContext";
import UserDetailsAvatar from "../userAvatars/UserDetailsAvatar";
import AppDrawerNavigationLinks from "./AppDrawerNavigationLinks";
import Link from "next/link";
import { LogOutAction } from "@/src/app/utils/userAuthaction";
import { useRouter } from "next/navigation";
import ClickTextBtn from "../buttons/ClickTextBtn";
import AppDrawerNavigiationClick from "./AppDrawerNavigiationClick";
import { AuthContext } from "@/src/_contextApi/authContext";
import BtnLinks from "../buttons/BtnLinks";
import { IoCloseSharp } from "../ApplicationIcons";
import CircleImg from "../userAvatars/CircleImg";
import AppDrawerFooterNvagigation from "./AppDrawerFooterNvagigation";

export default function MobileAppDrawer() {
  const router = useRouter();
  const { authUser } = useContext(AuthContext);
  const { isAppDrawer, handelCloseAppDraer, isBtnLoadin, setisBtnLoadin } =
    useContext(AppContext);

  const handellogOut = async () => {
    try {
      setisBtnLoadin(true);
      const res = await LogOutAction();

      if (res.data.status === "success") {
        router.refresh();
        setisBtnLoadin(false);
      }
    } catch (error) {
      setisBtnLoadin(false);
    }
  };

  return (
    <div
      className={`${styles.main_container} ${
        isAppDrawer ? styles.openAppDrawer : styles.closeAppDrawer
      }`}
      onClick={handelCloseAppDraer}
    >
      <div className={styles.appDrawer_innerContainer}>
        <div className={styles.top_section}>
          <div className={styles.appDrawer_header}>
            {authUser ? (
              <UserDetailsAvatar
                boldText={authUser.name}
                lightText={authUser?.userName}
                avtar_wrapper="maincard_avtar_wrapper"
                userImage={authUser?.userImg}
                imgDirectoryPath="/usersProfileImg"
              />
            ) : (
              <div className={styles.non_authUser}>
                <CircleImg avtar_wrapperStyle="maincard_avtar_wrapper" />
                <BtnLinks
                  linkText="Login/Register"
                  btnType="link_style"
                  hrflink="/auth/login"
                  size="small"
                />{" "}
              </div>
            )}

            <div className="small_text cursor_pointer">
              <IoCloseSharp />{" "}
            </div>
          </div>
          <div className={styles.appDrawer_option_Container}>
            <div className={styles.appDrawer_link_option_wrapper}>
              <AppDrawerNavigationLinks />
            </div>
            {authUser && (
              <div className={styles.appDrawer_link_option_wrapper}>
                <AppDrawerNavigiationClick />
              </div>
            )}
          </div>
        </div>
        <div className={styles.bottom_section}>
          <AppDrawerFooterNvagigation />
          <div className={styles.log_outBtn_wrapper}>
            {authUser ? (
              <ClickTextBtn
                btnText="log out"
                fullWidth={true}
                clickHandel={handellogOut}
                disabledBtn={false}
                btnLoading={isBtnLoadin}
              />
            ) : (
              <BtnLinks linkText="login" hrflink="/auth/login" size="medium" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
