import UserProfileWrapper from "@/src/_components/user_Dashboard/profile/UserProfileWrapper";
import React from "react";
import styles from "../../page.module.css";

export const metadata = {
  title: "LitVerseHub | profile",
  description: "LitVerseHub – Your digital hub for writers and readers.",
};

export default function UserProfilePage() {
  return (
    <div className={styles.page_container}>
      <UserProfileWrapper />
    </div>
  );
}
