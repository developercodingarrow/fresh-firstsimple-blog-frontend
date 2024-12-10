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
    isReportModel,
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
      {isReportModel && (
        <div className={styles.model_full_container}>
          <div className={styles.model_container}>
            <ModelHeader
              modelTitle="Report Model"
              modelCloseHandler={handelCloseReportModel}
            />
            <div className={styles.model_body}>
              <div>
                <form onSubmit={handleSubmit(handelReportSubmit)}>
                  {ReportContentradioOptions.map((input) => renderInput(input))}
                </form>
              </div>
            </div>
            <ModelCommanFooter modelCloseHandler={handelCloseReportModel} />
          </div>
        </div>
      )}
    </>
  );
}
