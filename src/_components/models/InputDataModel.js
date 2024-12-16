"use client";
import React, { useContext } from "react";
import styles from "./css/model.module.css";
import toast, { Toaster } from "react-hot-toast";
import ModelHeader from "./modelElements/ModelHeader";
import { InputModelsContext } from "@/src/_contextApi/InputModelContextApi";
import ModelCommanFooter from "./modelElements/ModelCommanFooter";
import { useCustomApiForm } from "@/src/_custome-hooks/useCutomeApiform";
import { AuthContext } from "@/src/_contextApi/authContext";
import { updateUserDetail } from "@/src/app/utils/userAuthaction";

export default function InputDataModel(props) {
  const { modelTitle, modelInputfileds, actionID, apiData } = props;
  const { handelcloseInputModal } = useContext(InputModelsContext);
  const { handelUpdateUserProfile } = useContext(AuthContext);

  const dynimicData = [];
  const {
    handleSubmit,
    formState,
    control,
    watch,
    setValue,
    renderInput,
    isValid,
    reset,
  } = useCustomApiForm(apiData, modelInputfileds);

  const modelformsubmit = async (data) => {
    const obj = {
      ...data,
      _id: actionID,
    };
    try {
      const res = await handelUpdateUserProfile(obj);

      if (res.data.status === "success") {
        updateUserDetail(res.data.result);
        toast.success(res.data.message);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.model_full_container}>
      <Toaster />{" "}
      <div className={styles.model_container}>
        {" "}
        <ModelHeader
          modelTitle={modelTitle}
          modelCloseHandler={handelcloseInputModal}
        />
        <div className={styles.model_body}>
          <form onSubmit={handleSubmit(modelformsubmit)}>
            {modelInputfileds.map((input) => {
              return (
                <div key={input.id}>{renderInput(input, dynimicData)}</div>
              );
            })}
            <ModelCommanFooter modelCloseHandler={handelcloseInputModal} />
          </form>
        </div>
      </div>{" "}
    </div>
  );
}
