"use client";
import React, { useState, useContext, useEffect } from "react";
import styles from "./userdashboardui.module.css";
import UserDetailsAvatar from "../../userAvatars/UserDetailsAvatar";
import TabBar from "../../tabs/TabBar";
import SidbarPagesComponent from "../../sidebards/SidbarPagesComponent";
import SideBarFeatureList from "../../sidebards/SideBarFeatureList";
import { AuthContext } from "@/src/_contextApi/authContext";
import { featuresideBlogs } from "@/src/app/utils/blogsAction";
import { IoPower } from "../../ApplicationIcons";
import MobileLogOut from "../mobilelogout/MobileLogOut";

export default function UserdashboardUi({ children }) {
  const { authUser } = useContext(AuthContext);
  const [sidebarBlogs, setsidebarBlogs] = useState([]);
  const userpageLinks = [
    {
      text: "Home",
      hrflink: "/me/profile",
    },
    {
      text: "Publihed",
      hrflink: "/me/blogs/public",
    },

    {
      text: "Draft",
      hrflink: "/me/blogs/drafts",
    },

    {
      text: "Online Presence",
      hrflink: "/me/online-presence",
    },

    {
      text: "Bio",
      hrflink: "/me/bio",
    },
    {
      text: "Setting",
      hrflink: "/me/settings",
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

  const handelgetSidebarBlogs = async () => {
    try {
      const res = await featuresideBlogs();
      setsidebarBlogs(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handelgetSidebarBlogs();
  }, []);

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        {" "}
        <div className={styles.left_side_container}>
          <section className={styles.header_wapper}>
            <UserDetailsAvatar
              boldText={authUser.name}
              lightText={authUser?.userName}
              avtar_wrapper="userHeader_avtar"
              userImage={authUser?.userImg}
              imgDirectoryPath="/usersProfileImg"
            />

            <div className={styles.mobile_logout}>
              <MobileLogOut />
            </div>
          </section>
          <div className={styles.tab_wrapper}>
            <TabBar
              data={userpageLinks}
              linkTextName="text"
              hrflinkName="hrflink"
              stickypos={50}
            />
          </div>

          <div className={styles.page_content_wrapper}>{children}</div>
        </div>{" "}
        <div className={styles.right_side_container}>
          <div className={styles.sidebar_component_wrapper}>
            <SidbarPagesComponent
              sectionTitle="Guid articles"
              listData={guidlin}
              linkTextName="text"
              hrflinkName="hrflink"
              path="seo"
            />
          </div>
          <div className={styles.sidebar_component_wrapper}>
            <SideBarFeatureList
              sectionTitle="featured blogs"
              listData={sidebarBlogs}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
