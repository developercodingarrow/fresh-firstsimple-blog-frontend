"use client";
import React, { useContext } from "react";
import styles from "./css/userprofilewrapper.module.css";
import UserTextDetail from "../elements/UserTextDetail";
import UserImagDetail from "../elements/UserImagDetail";
import { InputModelsContext } from "@/src/_contextApi/InputModelContextApi";
import { AuthContext } from "@/src/_contextApi/authContext";
import { nameinput, userNameinput } from "@/src/jsonData/userDashbordData";
import InputDataModel from "../../models/InputDataModel";

export default function UserProfileWrapper() {
  const { authUser } = useContext(AuthContext);
  const {
    isOpenInputModel,
    handelOpenInputModel,
    modelHeading,
    modelInputFild,
    elementId,
    modelApiData,
    actionHandler,
  } = useContext(InputModelsContext);

  const updatehsndler = () => {};
  return (
    <div className={styles.main_container}>
      {isOpenInputModel && (
        <InputDataModel
          modelTitle={modelHeading}
          modelInputfileds={modelInputFild}
          actionID={elementId}
          apiData={authUser}
        />
      )}
      <div className="mg_botom_lg">
        <UserTextDetail
          lableText="Name"
          valueText={authUser?.name}
          openModal={handelOpenInputModel}
          modelHeading="Update Facbook Profile page"
          apiData={authUser}
          modelInputs={nameinput}
          modelActionHandler={updatehsndler}
        />
      </div>
      <div className="mg_botom_lg">
        <UserTextDetail
          lableText="User Name"
          valueText={authUser?.userName}
          openModal={handelOpenInputModel}
          modelHeading="Update Facbook Profile page"
          apiData={authUser}
          modelInputs={userNameinput}
          modelActionHandler={updatehsndler}
        />
      </div>
      <div className="mg_botom_lg">
        <UserImagDetail lableText="User Name" valueText="@Sanjay" />
      </div>
    </div>
  );
}
