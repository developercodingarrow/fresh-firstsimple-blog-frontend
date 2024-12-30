"use client";
import React, { useContext } from "react";
import styles from "./loading.module.css";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function CustomePageLoading() {
  const { pageLoading, setpageLoading } = useContext(AppContext);
  return (
    <>
      {pageLoading && (
        <div className={styles.main_container}>
          <div className={styles.loader}></div>
        </div>
      )}
    </>
  );
}
