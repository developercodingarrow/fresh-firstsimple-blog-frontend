import React from "react";
import styles from "../../page.module.css";
import UpdatePasswordUi from "@/src/_components/user_Dashboard/setting/UpdatePasswordUi";

export const metadata = {
  title: "LitVerseHub | chnage your password",
  description: "LitVerseHub – Your digital hub for writers and readers.",
};
export default function ChnagePasswordPage() {
  return (
    <div className={styles.page_container}>
      <UpdatePasswordUi />
    </div>
  );
}
