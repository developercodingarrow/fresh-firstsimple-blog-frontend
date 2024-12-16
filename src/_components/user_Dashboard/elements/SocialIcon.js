import React from "react";
import styles from "./css/socilaIcon.module.css";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
  RiTwitterXLine,
  TbWorldWww,
} from "../../ApplicationIcons";
export default function SocialIcon(props) {
  const { showicon } = props;
  const getSocialMediaIcon = (title) => {
    switch (title.toLowerCase()) {
      case "twitter":
        return <RiTwitterXLine />;
      case "facebook":
        return <TiSocialFacebook />;
      case "instagram":
        return <TiSocialInstagram />;
      case "linkedin":
        return <TiSocialLinkedin />;
      case "youtub":
        return <TiSocialYoutube />;
      case "website":
        return <TbWorldWww />;
      default:
        return null; // If no matching title, return null
    }
  };

  return (
    <div className={styles.social_iconBox}>{getSocialMediaIcon(showicon)}</div>
  );
}
