import OnlinePresenceWrapper from "@/src/_components/user_Dashboard/Online_Presence/OnlinePresenceWrapper";
import React from "react";
import styles from "../../page.module.css";
export default function OnlinePresencePage() {
  return (
    <div className={styles.page_container}>
      <OnlinePresenceWrapper />
    </div>
  );
}
