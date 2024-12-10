import React from "react";
import styles from "./css/UserTextDetail.module.css";
import userAvtar from "../../../../public/web-static-img/user-avatar-img.png";
import Image from "next/image";
export default function UserImagDetail(props) {
  const { lableText, valueText } = props;
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={`${styles.lable_text} medium__text `}>{lableText}</div>
        <div className={`${styles.img_value} medium__text`}>
          <Image
            src={userAvtar}
            width={50}
            height={50}
            className={styles.img_style}
          />
        </div>
      </div>
    </div>
  );
}
