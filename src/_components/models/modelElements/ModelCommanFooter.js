"use client";
import React, { useContext } from "react";
import styles from "../css/model.module.css";

import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import ClickTextBtn from "../../buttons/ClickTextBtn";
import SubmitBtn from "../../buttons/SubmitBtn";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function ModelCommanFooter(props) {
  const { actionType } = props;
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const { actionHandler } = useContext(ModelsContext);

  return (
    <div className={styles.model_footer}>
      {actionType && (
        <SubmitBtn btnText="Update" btnLoading={isBtnLoadin} size="small" />
      )}
    </div>
  );
}
