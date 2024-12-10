import React from "react";
import styles from "./css/followsocialmediacard.module.css";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialYoutube,
  TiSocialInstagram,
  RiTwitterXLine,
} from "../../../ApplicationIcons";
import SocialIconsLinks from "@/src/_components/social_icons/SocialIconsLinks";
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
          <SocialIconsLinks
            showicon="facebook"
            iconlink="https://www.facebook.com/"
          />
          <SocialIconsLinks
            showicon="youtub"
            iconlink="https://www.youtube.com/"
          />
          <SocialIconsLinks
            showicon="instagram"
            iconlink="https://www.instagram.com/"
          />
          <SocialIconsLinks
            showicon="linkedin"
            iconlink="https://in.linkedin.com/"
          />
          <SocialIconsLinks showicon="twitter" iconlink="https://x.com/" />
        </div>
      </div>
    </div>
  );
}
