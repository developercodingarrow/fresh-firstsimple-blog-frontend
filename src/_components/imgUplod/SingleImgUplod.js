"use client";
import React, { useContext } from "react";
import styles from "./singleImgUplod.module.css";
import ImgUplodBox from "./ImgUplodBox";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import Image from "next/image";
import ClickTextBtn from "../buttons/ClickTextBtn";
import { MdDelete } from "../ApplicationIcons";
export default function SingleImgUplod(props) {
  const { apiData, imageFor, deleteHandel } = props;
  const { handleOpenSingleImgModel } = useContext(ModelsContext);

  const handelDeleteApiImg = async () => {
    try {
      const res = await deleteHandel(apiData._id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      {apiData?.blogThumblin?.url ? (
        <>
          <div className={styles.img_uplodBox_wrapper}>
            <Image
              src={`/${imageFor}/${apiData?.blogThumblin?.url}`}
              width={500}
              height={500}
              className={styles.api_imgStyle}
            />
          </div>

          <div className={styles.container_footer}>
            {deleteHandel && (
              <div
                onClick={handelDeleteApiImg}
                className={`medium__text text_color_bold_gray cursor_pointer`}
              >
                {" "}
                <MdDelete />{" "}
              </div>
            )}

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
        <div>
          <div className={styles.img_uplodBox_wrapper}>
            <ImgUplodBox
              boxtext="click to select file here"
              handelClick={handleOpenSingleImgModel}
              boximgInputaction={false}
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
        </div>
      )}
    </div>
  );
}
