import React from "react";
import styles from "./css/appnavbar.module.css";
import BtnLinks from "../../buttons/BtnLinks";
import dummyImg from "../../../../public/web-static-img/user-avatar-img.png";
import Image from "next/image";
import CircleImg from "../../userAvatars/CircleImg";
export default function UserAuthWrapper(props) {
  const { userData } = props;
  return (
    <div className={styles.userAuth_container}>
      {userData ? (
        <div>
          <CircleImg
            imgSrc={dummyImg}
            avtar_wrapperStyle={"navbar_avtar_wrapper"}
          />
        </div>
      ) : (
        <BtnLinks linkText="login" hrflink="/auth/login" size="medium_fill" />
      )}
    </div>
  );
}
