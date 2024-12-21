import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./css/mainfooter.module.css";
import Link from "next/link";
import FooterAutn from "./FooterAutn";

export default function MobileFooter(props) {
  const { userData } = props;
  return (
    <div className={styles.mobile_footer_container}>
      <Link href={"/"} className={styles.footer_item}>
        <GoHomeFill className={styles.icon} />
        <span>Home</span>
      </Link>
      <Link href={"blog-topics"} className={styles.footer_item}>
        <BiSolidPurchaseTagAlt className={styles.icon} />
        <span>Tags</span>
      </Link>
      <div className={styles.footer_item}>
        <CiCirclePlus className={styles.icon} />
        <span>Create</span>
      </div>
      <FooterAutn authData={userData} />
    </div>
  );
}
