"use client";
import React, { useContext } from "react";
import styles from "../css/model.module.css";

import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import ClickTextBtn from "../../buttons/ClickTextBtn";
import SubmitBtn from "../../buttons/SubmitBtn";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function ModelCommanFooter(props) {
  const { actionType, btnText, clickBtnHandel } = props;
  const { isBtnLoadin } = useContext(AppContext);

  return (
    <div className={styles.model_footer}>
      {actionType === "submit" && (
        <SubmitBtn btnText="Update" btnLoading={isBtnLoadin} size="medium" />
      )}
      {actionType === "click" && (
        <ClickTextBtn
          btnText={btnText}
          btnLoading={isBtnLoadin}
          size="medium"
          disabledBtn={false}
          clickHandel={clickBtnHandel}
        />
      )}
    </div>
  );
}
