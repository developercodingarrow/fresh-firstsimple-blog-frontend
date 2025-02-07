import React from "react";
import styles from "./css/sidebarcard.module.css";
import UserDetailsAvatar from "../userAvatars/UserDetailsAvatar";
import Link from "next/link";
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
          pageLink={data?.user?.userName}
        />
      </div>
      <Link href={`blog/${data?.slug}`}>
        <h4> {data?.blogTitle} </h4>
      </Link>
    </div>
  );
}
