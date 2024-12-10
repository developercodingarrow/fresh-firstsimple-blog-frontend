import React from "react";
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

export default function SocialMediaDetail(props) {
  const { lableText, valueText } = props;

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={`${styles.lable_text} medium__text `}>{lableText}</div>
        <div className={`${styles.value_text} medium__text`}>
          {valueText}
          <span className="icon_box">
            <MdKeyboardArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}
