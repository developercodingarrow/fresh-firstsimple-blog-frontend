import React from "react";
import styles from "./css/sidebarcard.module.css";
import UserDetailsAvatar from "../userAvatars/UserDetailsAvatar";
export default function SideBarCard(props) {
  const { data } = props;
  return (
    <div className={styles.main_container}>
      {" "}
      <div className={styles.card_header}>
        <UserDetailsAvatar
          boldText={data?.user?.name}
          dateText={data?.updatedAt}
          userImage={data?.user?.userImg}
          imgDirectoryPath="/usersProfileImg"
          avtar_wrapper="maincard_avtar_wrapper"
        />
      </div>
      <div>
        <h4> {data?.blogTitle} </h4>
      </div>
    </div>
  );
}
