"use client";
import React, { useContext, useState } from "react";
import { HiMagnifyingGlass } from "../ApplicationIcons";
import styles from "./navlogo.module.css";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function MobileNavSearchWrapper() {
  const { handelTogleMobileSearch } = useContext(AppContext);
  return (
    <div className={styles.nav_search_icon} onClick={handelTogleMobileSearch}>
      <HiMagnifyingGlass />
    </div>
  );
}
