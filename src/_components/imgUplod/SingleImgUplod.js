"use client";
import React, { useContext } from "react";
import styles from "./singleImgUplod.module.css";
import ImgUplodBox from "./ImgUplodBox";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import Image from "next/image";
import ClickTextBtn from "../buttons/ClickTextBtn";
export default function SingleImgUplod(props) {
  const { apiImg, imageFor } = props;
  const { handleOpenSingleImgModel } = useContext(ModelsContext);
  return (
    <div className={styles.container}>
      {apiImg ? (
        <>
          <div className={styles.img_uplodBox_wrapper}>
            <Image
              src={`/${imageFor}/${apiImg?.blogThumblin?.url}`}
              width={500}
              height={500}
              className={styles.api_imgStyle}
            />
          </div>

          <div className={styles.container_footer}>
            <div className={styles.section_title}>
              <ClickTextBtn
                btnText="Upload"
                btnType="link_typeBtn"
                size="small_link"
                clickHandel={handleOpenSingleImgModel}
              />
            </div>
          </div>
        </>
      ) : (
        <div className={styles.img_uplodBox_wrapper}>
          <ImgUplodBox
            boxtext="click to select file here"
            handelClick={handleOpenSingleImgModel}
            boximgInputaction={false}
          />
        </div>
      )}
    </div>
  );
}
