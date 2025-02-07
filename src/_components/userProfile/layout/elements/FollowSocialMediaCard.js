import React from "react";
import styles from "./css/followsocialmediacard.module.css";

import SocialIconsLinks from "@/src/_components/social_icons/SocialIconsLinks";
export default function FollowSocialMediaCard(props) {
  const { data } = props;
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className="capitalize_text mg_botom_sm section_medium_heading">
          <h3>Follow on Us</h3>
        </div>
        <div
          className={`${styles.card_sub_details} medium__text text_color_bold_gray`}
        >
          Stay updated by following us on online platforms for more details.
        </div>
        <div className={styles.social_media_icon_wrapper}>
          {data?.facebook || data?.instagram || data?.twitter ? (
            <>
              {data?.facebook && (
                <SocialIconsLinks
                  showicon="facebook"
                  iconlink={data.facebook}
                />
              )}
              {data?.instagram && (
                <SocialIconsLinks
                  showicon="instagram"
                  iconlink={data.instagram}
                />
              )}
              {data?.twitter && (
                <SocialIconsLinks showicon="twitter" iconlink={data.twitter} />
              )}
            </>
          ) : (
            <div className="small_text">
              User has not updated online details.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
