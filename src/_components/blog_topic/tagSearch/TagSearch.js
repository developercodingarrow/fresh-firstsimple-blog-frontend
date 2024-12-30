"use client";
import React, { useState } from "react";
import styles from "./tagsearch.module.css";
import { HiMagnifyingGlass } from "../../ApplicationIcons";
export default function TagSearch(props) {
  const { onSearch } = props;
  const [searchTerm, setSearchTerm] = useState("");
  // Handle input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value);
  };
  return (
    <div className={styles.search_container}>
      <div
        className={`${styles.search_iconBox} large__text text_color_bold_gray `}
      >
        <HiMagnifyingGlass />
      </div>
      <div className={styles.search_input_box}>
        <input
          className={`${styles.search_input} large__text text_color_bold_gray`}
          placeholder="search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
