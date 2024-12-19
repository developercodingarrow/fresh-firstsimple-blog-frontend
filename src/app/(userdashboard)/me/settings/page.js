import React from "react";
import styles from "../../page.module.css";
import UpdatePasswordUi from "@/src/_components/user_Dashboard/setting/UpdatePasswordUi";
export default function ChnagePasswordPage() {
  return (
    <div className={styles.page_container}>
      <UpdatePasswordUi />
    </div>
  );
}
