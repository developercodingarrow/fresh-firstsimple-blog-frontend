"use client";
import React, { useRef, useContext, useEffect } from "react";
import styles from "./css/mainfooter.module.css";
import { IoPower } from "../ApplicationIcons";
import CircleImg from "../userAvatars/CircleImg";
import { AppContext } from "@/src/_contextApi/AppContext";
import NavAuthDropDown from "../navbar/NavAuthDropDown";
import FooterAuthDropDown from "./FooterAuthDropDown";
import Link from "next/link";

export default function FooterAutn(props) {
  const { handelOpenFooterPopUp, handelCloseFooterPopUp, isfooterAuthPopUp } =
    useContext(AppContext);
  const { authData } = props;
  const footerRef = useRef();

  console.log(authData);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (footerRef.current && !footerRef.current.contains(event.target)) {
        handelCloseFooterPopUp(); // Close dropdown
      }
    };
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isfooterAuthPopUp, handelCloseFooterPopUp]);
  return (
    <div ref={footerRef}>
      {authData ? (
        <div>
          <Link href={"/me/profile"} className={styles.footer_auth_img}>
            <CircleImg
              imgSrc={authData?.userImg}
              avtar_wrapperStyle="mobile_footer_avtar"
              imgDirectoryPath="/usersProfileImg"
            />
            <span>you</span>
          </Link>
        </div>
      ) : (
        <Link href={"/auth/login"} className={styles.footer_item}>
          <IoPower className={styles.icon} />
          <span>Login</span>
        </Link>
      )}
    </div>
  );
}
