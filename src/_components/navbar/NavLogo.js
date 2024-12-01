import React from "react";
import styles from "./navlogo.module.css";
import Image from "next/image";
import weblogo from "../../../public/web-static-img/logo.png";
export default function NavLogo() {
  return (
    <div className={styles.logo_container}>
      <Image
        src={weblogo}
        width={500}
        height={500}
        className={styles.logo_style}
      />
    </div>
  );
}
