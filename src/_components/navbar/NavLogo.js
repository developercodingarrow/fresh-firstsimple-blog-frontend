import React from "react";
import styles from "./navlogo.module.css";
import Image from "next/image";
import weblogo from "../../../public/web-static-img/logo.png";
import Link from "next/link";
export default function NavLogo() {
  return (
    <Link href={"/"} className={styles.logo_container}>
      <Image
        src={weblogo}
        width={500}
        height={500}
        className={styles.logo_style}
      />
    </Link>
  );
}
