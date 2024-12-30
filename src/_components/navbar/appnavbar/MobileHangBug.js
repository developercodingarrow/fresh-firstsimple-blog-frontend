"use client";
import React, { useRef, useContext, useEffect } from "react";
import styles from "./css/appnavbar.module.css";
import { IoMdList } from "../../ApplicationIcons";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function MobileHangBug() {
  const { isAppDrawer, handelOpenAppDraer, handelCloseAppDraer } =
    useContext(AppContext);
  return (
    <div className={styles.hanbug_icon}>
      <IoMdList onClick={handelOpenAppDraer} />
    </div>
  );
}
