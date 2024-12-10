"use client";
import React, { useContext, useEffect } from "react";
import styles from "./css/model.module.css";
import { AuthContext } from "@/src/_contextApi/authContext";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import ModelHeader from "./modelElements/ModelHeader";
import ModelCommanFooter from "./modelElements/ModelCommanFooter";

export default function AuthModel() {
  const { authUser } = useContext(AuthContext);
  const { isAuthModel, handelCloseAuthModel } = useContext(ModelsContext);
  return (
    <>
      {isAuthModel && (
        <div className={styles.model_full_container}>
          <div className={styles.model_container}>
            <ModelHeader
              modelTitle="Auth Model"
              modelCloseHandler={handelCloseAuthModel}
            />
            <div className={styles.model_body}>auth model</div>
            <ModelCommanFooter modelCloseHandler={handelCloseAuthModel} />
          </div>
        </div>
      )}
    </>
  );
}
