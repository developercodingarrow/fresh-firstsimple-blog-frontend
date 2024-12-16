"use client";
import React, { useContext } from "react";
import styles from "./css/onlineprsencewrapper.module.css";
import UserTextDetail from "../elements/UserTextDetail";
import SocialMediaDetail from "../elements/SocialMediaDetail";
import InputDataModel from "../../models/InputDataModel";
import { InputModelsContext } from "@/src/_contextApi/InputModelContextApi";
import {
  facbookinput,
  twitterinput,
  instagraminput,
} from "@/src/jsonData/userDashbordData";
import { AuthContext } from "@/src/_contextApi/authContext";

export default function OnlinePresenceWrapper() {
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
        <SocialMediaDetail
          lableText="Facbook"
          valueText="Sanjay"
          icon="facebook"
          openModal={handelOpenInputModel}
          modelHeading="Update Facbook Profile page"
          apiData={authUser}
          modelInputs={facbookinput}
          modelActionHandler={updatehsndler}
        />
      </div>
      <div className="mg_botom_lg">
        <SocialMediaDetail
          lableText="Twiiter X"
          valueText="@Sanjay"
          icon="twitter"
          openModal={handelOpenInputModel}
          modelHeading="Update Twitter Profile page"
          apiData={authUser}
          modelInputs={twitterinput}
          modelActionHandler={updatehsndler}
        />
      </div>
      <div className="mg_botom_lg">
        <SocialMediaDetail
          lableText="Instgram"
          valueText="@Sanjay"
          icon="instagram"
          openModal={handelOpenInputModel}
          modelHeading="Update Instgram Profile page"
          apiData={authUser}
          modelInputs={instagraminput}
          modelActionHandler={updatehsndler}
        />
      </div>
      <div className="mg_botom_lg">
        <SocialMediaDetail
          lableText="website"
          valueText="@Sanjay"
          icon="website"
          openModal={handelOpenInputModel}
          modelHeading="Update Webste Domain"
          apiData="website-domain"
          modelActionHandler={updatehsndler}
        />
      </div>
    </div>
  );
}
