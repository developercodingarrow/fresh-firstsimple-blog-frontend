"use client";
import React, { useContext, useState, useRef } from "react";
import styles from "./css/model.module.css";
import toast, { Toaster } from "react-hot-toast";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import ModelHeader from "./modelElements/ModelHeader";
import CircleImg from "../userAvatars/CircleImg";
import useImageUpload from "@/src/_custome-hooks/useImageUpload";
import Image from "next/image";
import { handeluplodUserPic } from "@/src/app/imghandlers/imageHandlers";
import ClickTextBtn from "../buttons/ClickTextBtn";
import { InputModelsContext } from "@/src/_contextApi/InputModelContextApi";
import { AppContext } from "@/src/_contextApi/AppContext";
import { updateUserDetail } from "@/src/app/utils/userAuthaction";
import { AuthContext } from "@/src/_contextApi/authContext";
import { userImgRemove } from "@/src/app/utils/userActions";

export default function UserImgModel(props) {
  const { actionId, imgUrl } = props;
  const { handelCloseUserImgModel, isUserImgModel } =
    useContext(InputModelsContext);
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const { setauthUser } = useContext(AuthContext);
  const fileInputRef = useRef(null);

  const { previewImage, image, handleImageUpload, removeImg } =
    useImageUpload();

  const handleClickUpload = () => {
    fileInputRef.current.click();
  };

  const handelSubmit = async () => {
    try {
      setisBtnLoadin(true);
      const res = await handeluplodUserPic(image, "userImg", actionId);
      if (res.data.status === "success") {
        setisBtnLoadin(false);
        updateUserDetail(res.data.result);
        setauthUser(res.data.result);
        toast.success(res.data.message);
        console.log(res);
      }
    } catch (error) {
      console.log("error---", error);
      setisBtnLoadin(false);
    }
  };

  const handelDeleteImg = async () => {
    try {
      const res = await userImgRemove();
      if (res.data.status === "success") {
        setisBtnLoadin(false);
        updateUserDetail(res.data.result);
        setauthUser(res.data.result);
        toast.success(res.data.message);
        console.log(res);
      }
    } catch (error) {
      console.log("error---", error);
    }
  };

  return (
    <div
      className={`${styles.model_full_container} ${
        isUserImgModel ? styles.visible : ""
      }`}
    >
      <Toaster
        toastOptions={{
          className: "medium__text ",
        }}
      />
      <div
        className={`${styles.model_container} ${styles.user_image_model_container}`}
      >
        <ModelHeader
          modelTitle="update profile pic"
          modelCloseHandler={handelCloseUserImgModel}
        />
        <div className={styles.user_img_body}>
          <div className={styles.user_avatar_column}>
            {previewImage ? (
              <div className={styles.userHeader_avtar}>
                <Image
                  src={previewImage}
                  alt="alt text"
                  width={500}
                  height={500}
                  className="circle_img_style"
                />
              </div>
            ) : (
              <CircleImg
                imgSrc={imgUrl}
                avtar_wrapperStyle="userHeader_avtar"
                imgDirectoryPath="/usersProfileImg"
              />
            )}
          </div>
          <div>
            <div className="small_text mg_botom_sm">
              Recommended: Square JPG, PNG, or GIF, at least 1,000 pixels per
              side.
            </div>
            <div className={styles.img_upload_btns_wrappers}>
              <div className={styles.left_side_btns}>
                <div>
                  <ClickTextBtn
                    btnText="Uplod"
                    btnType="link_typeBtn"
                    size="small_link"
                    clickHandel={handleClickUpload}
                  />
                </div>
                <div>
                  {" "}
                  <input
                    type="file"
                    accept="image/*"
                    ref={fileInputRef}
                    onChange={handleImageUpload}
                    style={{ display: "none" }}
                  />
                </div>
                <div>
                  <ClickTextBtn
                    btnText="Remove"
                    btnType="link_typeBtn"
                    size="small_link"
                    clickHandel={removeImg}
                  />
                </div>

                <div>
                  <ClickTextBtn
                    btnText="Delete"
                    btnType="link_typeBtn"
                    size="small_link"
                    clickHandel={handelDeleteImg}
                  />
                </div>
              </div>
              <div>
                <ClickTextBtn
                  btnText="Update"
                  size="tiny"
                  btnLoading={isBtnLoadin}
                  clickHandel={handelSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
