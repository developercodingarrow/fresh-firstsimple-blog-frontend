import React from "react";
import styles from "./css/userprofilewrapper.module.css";
import UserTextDetail from "../elements/UserTextDetail";
import UserImagDetail from "../elements/UserImagDetail";
export default function UserProfileWrapper() {
  return (
    <div className={styles.main_container}>
      <div className="mg_botom_lg">
        <UserTextDetail lableText="Name" valueText="Sanjay" />
      </div>
      <div className="mg_botom_lg">
        <UserTextDetail lableText="User Name" valueText="@Sanjay" />
      </div>
      <div className="mg_botom_lg">
        <UserImagDetail lableText="User Name" valueText="@Sanjay" />
      </div>
    </div>
  );
}
