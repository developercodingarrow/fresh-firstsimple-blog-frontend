import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./css/mainfooter.module.css";

export default function MobileFooter() {
  return (
    <div className={styles.mobile_footer_container}>
      <div className={styles.footer_item}>
        <GoHomeFill className={styles.icon} />
        <span>Home</span>
      </div>
      <div className={styles.footer_item}>
        <BiSolidPurchaseTagAlt className={styles.icon} />
        <span>Tags</span>
      </div>
      <div className={styles.footer_item}>
        <CiCirclePlus className={styles.icon} />
        <span>Create</span>
      </div>
      <div className={styles.footer_item}>
        <FaRegUserCircle className={styles.icon} />
        <span>Profile</span>
      </div>
    </div>
  );
}
