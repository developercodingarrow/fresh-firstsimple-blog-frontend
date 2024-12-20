import React from "react";
import styles from "./css/Skeleton.module.css";
export default function SkeletonUserDetails() {
  return (
    <div className={styles.user_inLine_avatar}>
      <div className={styles.user_img_wrapper}>
        <div className={styles.maincard_avtar_wrapper}> </div>
      </div>
      <div className={styles.maincard_user_deatils}>
        <div className={styles.boldText}></div>
        <div className={styles.lightText}></div>
      </div>
    </div>
  );
}
