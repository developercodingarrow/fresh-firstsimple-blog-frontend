"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import styles from "./css/model.module.css";
import toast, { Toaster } from "react-hot-toast";
import ModelHeader from "./modelElements/ModelHeader";
import ModelCommanFooter from "./modelElements/ModelCommanFooter";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function DeleteModel(props) {
  const { isDeleteModel, actionHandler, actionID, handelCloseDeleteModel } =
    useContext(ModelsContext);
  const router = useRouter();
  const { setisBtnLoadin } = useContext(AppContext);
  const handelDelete = async () => {
    setisBtnLoadin(true);
    try {
      const res = await actionHandler({ _id: actionID });
      if (res.error) {
        setisBtnLoadin(false);
        toast.error(res.error);
        return;
      }

      if (res.data.status === "success") {
        toast.success(res.data.message);
        router.refresh();
        setisBtnLoadin(false);
        handelCloseDeleteModel();
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
          isDeleteModel ? styles.visible : ""
        }`}
      >
        <Toaster
          toastOptions={{
            className: "medium__text ",
          }}
        />
        <div
          className={`${styles.model_container} ${styles.inputData_model_container}`}
        >
          <ModelHeader
            modelTitle="Delete "
            modelCloseHandler={handelCloseDeleteModel}
          />
          <div className={styles.model_body}>
            Are You Sure to Delete Then delete Other Wise clcik on Cancel.... ?
          </div>
          <ModelCommanFooter
            actionType="click"
            btnText="Delete"
            clickBtnHandel={handelDelete}
          />
        </div>
      </div>
    </>
  );
}
