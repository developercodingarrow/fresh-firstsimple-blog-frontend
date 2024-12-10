import React from "react";
import styles from "./css/sidebarcard.module.css";
import UserDetailsAvatar from "../userAvatars/UserDetailsAvatar";
export default function SideBarCard() {
  return (
    <div className={styles.main_container}>
      {" "}
      <div className={styles.card_header}>
        <UserDetailsAvatar
          boldText="sanjay"
          lightText="24-aug-2024"
          avtar_wrapper="maincard_avtar_wrapper"
        />
      </div>
      <div>
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h4>
      </div>
    </div>
  );
}
