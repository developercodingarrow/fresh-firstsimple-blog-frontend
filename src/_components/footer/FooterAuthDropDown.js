import React from "react";
import styles from "./css/mainfooter.module.css";
import { LogOutAction } from "@/src/app/utils/userAuthaction";

export default function FooterAuthDropDown() {
  const handellogOut = async () => {
    try {
      const res = await LogOutAction();

      if (res.data.status === "success") {
        router.refresh();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={styles.footer_popUp} onClick={handellogOut}>
      Log out
    </div>
  );
}
