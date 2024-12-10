import React from "react";
import styles from "./css/socilaIcons.module.css";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
  RiTwitterXLine,
  TbWorldWww,
} from "../ApplicationIcons";
import Link from "next/link";
export default function SocialIconsLinks(props) {
  const { showicon, iconlink } = props;
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
    <Link href={`${iconlink}`} className={styles.social_iconBox}>
      {getSocialMediaIcon(showicon)}
    </Link>
  );
}
