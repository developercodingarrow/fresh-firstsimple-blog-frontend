"use client";
import React, { useRef, useContext, useEffect } from "react";

import styles from "./css/appnavbar.module.css";
import BtnLinks from "../../buttons/BtnLinks";
import dummyImg from "../../../../public/web-static-img/user-avatar-img.png";
import Image from "next/image";
import CircleImg from "../../userAvatars/CircleImg";
import NavAuthDropDown from "../NavAuthDropDown";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function UserAuthWrapper(props) {
  const { userData } = props;

  const { authDropDown, handelOpenAuthDropDown, handelCloseAuthDropDown } =
    useContext(AppContext);

  // Ref for dropdown container
  const dropdownRef = useRef();

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside the dropdown container
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handelCloseAuthDropDown(); // Close dropdown
      }
    };
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [authDropDown]);

  return (
    <div className={styles.userAuth_container} ref={dropdownRef}>
      {userData ? (
        <div onClick={handelOpenAuthDropDown}>
          <CircleImg
            imgSrc={userData?.userImg}
            avtar_wrapperStyle={"navbar_avtar_wrapper"}
          />
          {authDropDown && <NavAuthDropDown data={userData} />}
        </div>
      ) : (
        <BtnLinks
          btnType="link_style"
          linkText="login/Register"
          hrflink="/auth/login"
          size="medium_tag_links"
        />
      )}
    </div>
  );
}
