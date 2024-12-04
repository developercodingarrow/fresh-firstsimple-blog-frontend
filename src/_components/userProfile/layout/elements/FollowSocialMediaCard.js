import React from "react";
import styles from "./css/followsocialmediacard.module.css";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
  RiTwitterXLine,
} from "../../../ApplicationIcons";
export default function FollowSocialMediaCard() {
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className="capitalize_text mg_botom_sm section_medium_heading">
          <h3>Follow on Us</h3>
        </div>
        <div className={styles.card_sub_details}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className={styles.social_media_icon_wrapper}>
          <div className={styles.social_iconBox}>
            <TiSocialFacebook />
          </div>
          <div className={styles.social_iconBox}>
            <TiSocialLinkedin />
          </div>
          <div className={styles.social_iconBox}>
            <TiSocialYoutube />
          </div>
          <div className={styles.social_iconBox}>
            <TiSocialInstagram />
          </div>
          <div className={styles.social_iconBox}>
            <RiTwitterXLine />
          </div>
        </div>
      </div>
    </div>
  );
}
