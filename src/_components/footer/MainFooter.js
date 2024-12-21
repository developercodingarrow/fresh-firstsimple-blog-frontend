import React from "react";
import styles from "./css/mainfooter.module.css";
import DekstopFooter from "./DekstopFooter";
import MobileFooter from "./MobileFooter";
export default function MainFooter(props) {
  const { authData } = props;
  return (
    <div className={styles.main_container}>
      <div className={styles.dekstop_footer_wrapper}>
        <DekstopFooter />
      </div>
      <div className={styles.mobile_footer_wrapper}>
        <MobileFooter userData={authData} />
      </div>
    </div>
  );
}
