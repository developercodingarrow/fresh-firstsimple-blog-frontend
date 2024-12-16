"use client";
import React, { useContext } from "react";
import styles from "./css/UserTextDetail.module.css";
import { MdKeyboardArrowRight } from "../../ApplicationIcons";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
  RiTwitterXLine,
  TbWorldWww,
} from "../../ApplicationIcons";
import SocialIcon from "./SocialIcon";
import { InputModelsContext } from "@/src/_contextApi/InputModelContextApi";

export default function SocialMediaDetail(props) {
  const {
    lableText,
    valueText,
    icon,
    openModal,
    modelHeading,
    apiData,
    modelInputs,
    modelActionHandler,
  } = props;

  const handleOpen = () => {
    openModal(
      modelHeading,
      apiData,
      apiData._id,
      modelInputs,
      modelActionHandler
    );
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={`${styles.lable_text} medium__text `}>{lableText}</div>
        <div className={`${styles.socilaMedia_wrapper} `} onClick={handleOpen}>
          <div>
            <SocialIcon showicon={icon} />
          </div>
          <span className="icon_box">
            <MdKeyboardArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}
