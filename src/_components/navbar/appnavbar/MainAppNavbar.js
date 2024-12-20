import React from "react";
import styles from "./css/appnavbar.module.css";
import NavLogo from "../NavLogo";
import NavSearchBar from "./NavSearchBar";
import NavigationLinks from "./NavigationLinks";
import UserAuthWrapper from "./UserAuthWrapper";
import MobileNavSearchWrapper from "../MobileNavSearchWrapper";

export default function MainAppNavbar(props) {
  const { authData, suggestList } = props;
  return (
    <div className={`${styles.container}`}>
      <div className={styles.inner_container}>
        <div className={styles.inner_container_left_side}>
          <div className={styles.navbar_logo_wrapper}>
            <NavLogo />
          </div>
          <div>
            <NavSearchBar searchSuggest={suggestList} />
          </div>
        </div>
        <div className={styles.inner_container_right_side}>
          <NavigationLinks />

          <UserAuthWrapper userData={authData} />
        </div>
        <div className={styles.mobile_searchIcon_wrraper}>
          <MobileNavSearchWrapper />
        </div>
      </div>
    </div>
  );
}
