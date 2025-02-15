"use client";
import React, { useContext } from "react";
import styles from "./css/model.module.css";
import toast, { Toaster } from "react-hot-toast";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import ModelHeader from "./modelElements/ModelHeader";
import ModelCommanFooter from "./modelElements/ModelCommanFooter";
import { ReportContentradioOptions } from "@/src/jsonData/formInputsData";
import useCustomForm from "@/src/_custome-hooks/useCustomForm";
import { reportBlogAction } from "@/src/app/utils/blogsAction";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function ReportModel() {
  const {
    isReportModel = false,
    actionID,
    handelCloseReportModel,
  } = useContext(ModelsContext);
  const { setisBtnLoadin } = useContext(AppContext);
  const { handleSubmit, renderInput, isValid } = useCustomForm();

  const handelReportSubmit = async (data) => {
    setisBtnLoadin(true);
    try {
      const formData = {
        id: actionID,
        filedContent: data.reportcontent,
      };
      const res = await reportBlogAction(formData);
      if (res.error) {
        setisBtnLoadin(false);
        toast.error(res.error);
        return;
      }
      if (res.data.status === "success") {
        toast.success(res.data.message);
        setisBtnLoadin(false);
        setTimeout(() => {
          handelCloseReportModel();
        }, 1500); // Adjust delay based on toast duration
      }
    } catch (error) {
      toast.error("Oops! Something went wrong.");
      setisBtnLoadin(false);
    }
  };
  return (
    <>
      <div
        className={`${styles.model_full_container} ${
          isReportModel ? styles.visible : ""
        }`}
      >
        <Toaster
          toastOptions={{
            className: "medium__text ",
          }}
        />
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
