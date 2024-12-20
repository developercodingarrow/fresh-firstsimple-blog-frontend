"use client";
import React, { useContext } from "react";
import styles from "./css/UserTextDetail.module.css";
import userAvtar from "../../../../public/web-static-img/user-avatar-img.png";
import Image from "next/image";
import { InputModelsContext } from "@/src/_contextApi/InputModelContextApi";

export default function UserImagDetail(props) {
  const { lableText, valueText, apiData } = props;

  const {
    isUserImgModel,
    setisUserImgModel,
    handelOpenUserImgModel,
    handelCloseUserImgModel,
  } = useContext(InputModelsContext);

  const handelOpen = () => {
    handelOpenUserImgModel(apiData._id, apiData.userImg);
  };

  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={`${styles.lable_text} medium__text `}>{lableText}</div>
        <div
          className={`${styles.img_value} medium__text`}
          onClick={handelOpen}
        >
          <Image
            src={`/usersProfileImg/${apiData.userImg.url}`}
            width={50}
            height={50}
            className={styles.img_style}
          />
        </div>
      </div>
    </div>
  );
}
