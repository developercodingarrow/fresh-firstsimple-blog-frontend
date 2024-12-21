import React from "react";
import styles from "./css/mainfooter.module.css";
import { LogOutAction } from "@/src/app/utils/userAuthaction";

export default function FooterAuthDropDown() {
  const handellogOut = async () => {
    try {
      const res = await LogOutAction();
      console.log(res);
      if (res.data.status === "success") {
        router.refresh();
      }
    } catch (error) {}
  };
  return (
    <div className={styles.footer_popUp} onClick={handellogOut}>
      Log out
    </div>
  );
}
