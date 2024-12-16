import React from "react";
import styles from "./css/appnavbar.module.css";
import NavLogo from "../NavLogo";
import NavSearchBar from "./NavSearchBar";
import NavigationLinks from "./NavigationLinks";
import UserAuthWrapper from "./UserAuthWrapper";

export default function MainAppNavbar(props) {
  const { authData } = props;
  return (
    <div className={`${styles.container}`}>
      <div className={styles.inner_container}>
        <div className={styles.inner_container_left_side}>
          <div className={styles.navbar_logo_wrapper}>
            <NavLogo />
          </div>
          <div className={styles.nav_search_wrapper}>
            <NavSearchBar />
          </div>
        </div>
        <div className={styles.inner_container_right_side}>
          <NavigationLinks />

          <UserAuthWrapper userData={authData} />
        </div>
      </div>
    </div>
  );
}
