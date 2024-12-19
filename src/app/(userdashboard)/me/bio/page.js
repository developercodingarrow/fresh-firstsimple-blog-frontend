import UserBioWrapper from "@/src/_components/user_Dashboard/bio/UserBioWrapper";
import React from "react";
import styles from "../../page.module.css";
export default function Biopage() {
  return (
    <div className={styles.page_container}>
      <UserBioWrapper />
    </div>
  );
}
