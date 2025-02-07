"use client";
import React from "react";
import Link from "next/link";
import styles from "./customeerror.module.css";
import { BiLock } from "../ApplicationIcons";
import { LogOutAction } from "@/src/app/utils/userAuthaction";
import { useRouter } from "next/navigation";
import { RxExit } from "../ApplicationIcons";
export default function SuspendUI() {
  const router = useRouter();
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
    <div className={styles.container}>
      <div className={styles.card}>
        <BiLock size={48} className={styles.icon} />
        <h1 className={styles.title}>Account Suspended</h1>
        <p className={styles.message}>
          Your account has been suspended due to a violation of our terms of
          service. If you believe this is a mistake, please contact support.
        </p>
        <Link href="/" className={styles.link}>
          Contact us on Email
        </Link>

        <div className={styles.exit_btn_wrapper}>
          <div className={styles.exit_btn} onClick={handellogOut}>
            <RxExit />
            Exit
          </div>
        </div>
      </div>
    </div>
  );
}
