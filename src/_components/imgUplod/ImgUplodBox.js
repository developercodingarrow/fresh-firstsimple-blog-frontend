"use client";
import React, { useRef } from "react";
import styles from "./singleImgUplod.module.css";
export default function ImgUplodBox(props) {
  const { boxtext, handelClick, boximgInputaction = false } = props;
  const fileInputRef = useRef(null);

  const handleBoxClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click
    }
  };
  return (
    <div className={styles.image_upod_box} onClick={handleBoxClick}>
      <p>{boxtext}</p>

      <input
        type="file"
        accept="image/*"
        className={styles.file_inputStyle}
        ref={fileInputRef}
        onChange={handelClick} // Use the handler passed as a prop
        style={{ display: "none" }} // Hide the file input
      />
    </div>
  );
}
