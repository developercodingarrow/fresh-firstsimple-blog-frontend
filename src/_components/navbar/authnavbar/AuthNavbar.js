import React from "react";
import styles from "./authnavbar.module.css";
import NavLogo from "../NavLogo";
export default function AuthNavbar() {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.inner_container}>
        <div className={styles.navbar_logo_wrapper}>
          <NavLogo />
        </div>
      </div>
    </div>
  );
}
