import React from "react";
import styles from "./css/loading.module.css";
export default function BtnLoading(props) {
  const { spinerSize = "medium", btnpading = "medium_pading" } = props;
  return (
    <div className={`${styles.btnLoadingContainer} ${styles[btnpading]}`}>
      <div className={`${styles.spinner} ${styles[spinerSize]}`}></div>
    </div>
  );
}
