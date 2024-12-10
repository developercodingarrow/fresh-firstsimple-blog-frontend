import React from "react";
import styles from "./userdashboardui.module.css";
import UserDetailsAvatar from "../../userAvatars/UserDetailsAvatar";
import TabBar from "../../tabs/TabBar";
import SidbarPagesComponent from "../../sidebards/SidbarPagesComponent";
import SideBarFeatureList from "../../sidebards/SideBarFeatureList";

export default function UserdashboardUi({ children }) {
  const userpageLinks = [
    {
      text: "Publihed",
      hrflink: "/user/blogs/public",
    },

    {
      text: "Draft",
      hrflink: "/user/blogs/drafts",
    },

    {
      text: "Online Presence",
      hrflink: "/user/online-presence",
    },
    {
      text: "Home",
      hrflink: "/user/profile",
    },
    {
      text: "Bio",
      hrflink: "/user/bio",
    },
    {
      text: "Setting",
      hrflink: "/",
    },
  ];

  const guidlin = [
    {
      text: "Website Traffic",
      hrflink: "/",
    },

    {
      text: "Content Write Tips",
      hrflink: "/",
    },
    {
      text: "top website",
      hrflink: "/",
    },
  ];
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        {" "}
        <div className={styles.left_side_container}>
          <section className={styles.header_wapper}>
            <UserDetailsAvatar
              boldText="Sanjay"
              lightText="@sanjychauhan"
              avtar_wrapper="userHeader_avtar"
            />
          </section>
          <div className={styles.tab_wrapper}>
            <TabBar data={userpageLinks} />
          </div>

          <div className={styles.page_content_wrapper}>{children}</div>
        </div>{" "}
        <div className={styles.right_side_container}>
          <div className={styles.sidebar_component_wrapper}>
            <SidbarPagesComponent
              sectionTitle="Guid articles"
              listData={guidlin}
            />
          </div>
          <div className={styles.sidebar_component_wrapper}>
            <SideBarFeatureList sectionTitle="featured blogs" />
          </div>
        </div>
      </div>
    </div>
  );
}
