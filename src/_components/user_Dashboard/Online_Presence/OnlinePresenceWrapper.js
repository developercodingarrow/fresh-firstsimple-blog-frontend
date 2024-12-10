import React from "react";
import styles from "./css/onlineprsencewrapper.module.css";
import UserTextDetail from "../elements/UserTextDetail";
import SocialMediaDetail from "../elements/SocialMediaDetail";
export default function OnlinePresenceWrapper() {
  return (
    <div className={styles.main_container}>
      <div className="mg_botom_lg">
        <SocialMediaDetail
          lableText="Facbook"
          valueText="Sanjay"
          icon="facbook"
        />
      </div>
      <div className="mg_botom_lg">
        <SocialMediaDetail
          lableText="Twiiter X"
          valueText="@Sanjay"
          icon="twitter"
        />
      </div>
      <div className="mg_botom_lg">
        <SocialMediaDetail
          lableText="Instgram"
          valueText="@Sanjay"
          icon="instgram"
        />
      </div>
      <div className="mg_botom_lg">
        <SocialMediaDetail
          lableText="website"
          valueText="@Sanjay"
          icon="website"
        />
      </div>
    </div>
  );
}
