"use client";
import React, { useContext } from "react";
import styles from "./css/model.module.css";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import ModelHeader from "./modelElements/ModelHeader";
import ModelCommanFooter from "./modelElements/ModelCommanFooter";
import { ReportContentradioOptions } from "@/src/jsonData/formInputsData";
import useCustomForm from "@/src/_custome-hooks/useCustomForm";

export default function ReportModel() {
  const {
    isReportModel = true,
    setisReportModel,
    handelOpenReportModel,
    handelCloseReportModel,
  } = useContext(ModelsContext);
  const { handleSubmit, renderInput, isValid } = useCustomForm();

  const handelReportSubmit = () => {
    alert("report content");
  };
  return (
    <>
      <div
        className={`${styles.model_full_container} ${
          isReportModel ? styles.visible : ""
        }`}
      >
        <div
          className={`${styles.model_container} ${styles.repor_model_container}`}
        >
          <ModelHeader
            modelTitle="Report content"
            modelCloseHandler={handelCloseReportModel}
          />
          <div className={styles.model_body}>
            <div>
              <form onSubmit={handleSubmit(handelReportSubmit)}>
                {ReportContentradioOptions.map((input) => renderInput(input))}
                <ModelCommanFooter actionType="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
