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
import { AppContext } from "@/src/_contextApi/AppContext";

export default function InputDataModel(props) {
  const { modelTitle, modelInputfileds, actionID, apiData } = props;
  const { handelcloseInputModal, isOpenInputModel } =
    useContext(InputModelsContext);
  const { handelUpdateUserProfile, setauthUser } = useContext(AuthContext);
  const { setisBtnLoadin } = useContext(AppContext);
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
    setisBtnLoadin(true);
    const obj = {
      ...data,
      _id: actionID,
    };
    try {
      const res = await handelUpdateUserProfile(obj);

      if (res.data.status === "success") {
        setisBtnLoadin(false);
        updateUserDetail(res.data.result);
        setauthUser(res.data.result);
        toast.success(res.data.message);
        console.log(res);
      }
    } catch (error) {
      setisBtnLoadin(false);
      console.log(error);
    }
  };

  return (
    <div
      className={`${styles.model_full_container} ${
        isOpenInputModel ? styles.visible : ""
      }`}
    >
      <Toaster />{" "}
      <div
        className={`${styles.model_container} ${styles.inputData_model_container}`}
      >
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
            <ModelCommanFooter actionType="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
