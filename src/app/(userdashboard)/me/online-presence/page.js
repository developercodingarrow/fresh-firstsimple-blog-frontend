import OnlinePresenceWrapper from "@/src/_components/user_Dashboard/Online_Presence/OnlinePresenceWrapper";
import React from "react";
import styles from "../../page.module.css";

export const metadata = {
  title: "LitVerseHub | online presence",
  description: "LitVerseHub – Your digital hub for writers and readers.",
};

export default function OnlinePresencePage() {
  return (
    <div className={styles.page_container}>
      <OnlinePresenceWrapper />
    </div>
  );
}
