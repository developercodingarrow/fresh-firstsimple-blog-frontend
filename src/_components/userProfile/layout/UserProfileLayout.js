import React from "react";
import styles from "./userprofilelayout.module.css";
import UserDetailsAvatar from "../../userAvatars/UserDetailsAvatar";
import FollowSocialMediaCard from "./elements/FollowSocialMediaCard";
import Linkcard from "./elements/Linkcard";
import SideBarStats from "./elements/SideBarStats";
import TabBar from "../../tabs/TabBar";
import SocialIconsLinks from "../../social_icons/SocialIconsLinks";

export default function UserProfileLayout({ children, userProfile }) {
  const userpageLinks = [
    {
      text: "Home",
      hrflink: `/user-profile/${userProfile.userName}`,
    },

    {
      text: "About",
      hrflink: `/user-profile/${userProfile.userName}/about`,
    },
  ];

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={styles.left_side_container}>
          <section className={styles.header_wapper}>
            <UserDetailsAvatar
              boldText={userProfile?.name}
              lightText={userProfile?.userName}
              avtar_wrapper="userHeader_avtar"
            />
          </section>
          <div className={styles.mobile_socilaBar_wrapper}>
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
              <SocialIconsLinks showicon="website" iconlink="https://x.com/" />
            </div>
          </div>
          <div className={styles.tab_wrapper}>
            <TabBar
              data={userpageLinks}
              linkTextName="text"
              hrflinkName="hrflink"
              stickypos={50}
            />
          </div>

          <div className={styles.page_content_wrapper}>{children}</div>
        </div>
        <div className={styles.right_side_container}>
          <div className="mg_botom_sm">
            <FollowSocialMediaCard data={userProfile} />
          </div>
          <div className="mg_botom_sm">
            <Linkcard />
          </div>
        </div>
      </div>
    </div>
  );
}
