"use client";
import React, { useContext, useEffect } from "react";
import styles from "./css/model.module.css";
import toast, { Toaster } from "react-hot-toast";
import { IoCloseSharp, MdDelete } from "../ApplicationIcons";

import dummyImg from "../../../public/web-static-img/cardimg.png";
import Image from "next/image";
import ModelHeader from "./modelElements/ModelHeader";
import ImgUplodBox from "../imgUplod/ImgUplodBox";
import SimpleInput from "../elements/formelements/SimpleInput";
import SimpleTextArea from "../elements/formelements/SimpleTextArea";
import ClickTextBtn from "../buttons/ClickTextBtn";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import useImageUpload from "@/src/_custome-hooks/useImageUpload";
import { AppContext } from "@/src/_contextApi/AppContext";
import { deleteBlogThumblinImages } from "@/src/app/utils/blogsAction";

export default function SingleImgModel(props) {
  const { updateHandler, id, apiData } = props;
  const {
    isSingleImgModel,
    handleOpenSingleImgModel,
    handleCloseSingleImgModel,
  } = useContext(ModelsContext);
  const { setpageLoading, isBtnLoadin, setisBtnLoadin } =
    useContext(AppContext);
  const {
    previewImage,
    image,
    imgData,
    handleImageUpload,
    removeImg,
    handelChange,
    handleSave,
    isValid,
    errors,
  } = useImageUpload(apiData, "blogThumblin");

  const handelSubmitImg = async () => {
    try {
      setisBtnLoadin(true);
      setpageLoading(true);
      const res = await updateHandler(image, imgData, "blogThumblin", id);

      if (res.error) {
        toast.error(res.error);
        setisBtnLoadin(false);
        setpageLoading(false);
        router.refresh();
        return;
      }

      if (res.data.status === "success") {
        toast.success(res.data.message);
        setisBtnLoadin(false);
        setpageLoading(false);
        router.refresh();
      }
    } catch (error) {
      toast.error("Oops! Something went wrong.");
      setisBtnLoadin(false);
      setpageLoading(false);
      router.refresh();
    }
  };

  const handelDeleteApiImg = async () => {
    try {
      const res = await deleteBlogThumblinImages(apiData._id);
    
      if (res.error) {
        toast.error(res.error);
        return;
      }
      if (res.data.status === "success") {
        toast.success(res.data.message);
        router.refresh();
      }
    } catch (error) {
      toast.error("Oops! Something went wrong.");
    }
  };
  return (
    <>
      <div
        className={`${styles.model_full_container} ${
          isSingleImgModel ? styles.visible : ""
        }`}
      >
        <Toaster
          toastOptions={{
            className: "medium__text ",
          }}
        />
        <div className={styles.inner_container}>
          <div className={styles.img_model_container}>
            <ModelHeader
              modelTitle="Upload Blog Thumbiln"
              modelCloseHandler={handleCloseSingleImgModel}
            />
            <div className={styles.Img_model_body}>
              <div className={styles.body_inner_container}>
                <div className={styles.model_img_part}>
                  {previewImage ? (
                    // Show preview image if user uploads a new one
                    <div className={styles.img_previou_box}>
                      <Image
                        src={previewImage}
                        width={500}
                        height={500}
                        alt="image alt text"
                        className={styles.img_style}
                      />
                    </div>
                  ) : apiData?.blogThumblin?.url ? (
                    // Show API image if previewImage is not available
                    <div className={styles.img_previou_box}>
                      <Image
                        src={apiData.blogThumblin.url}
                        width={500}
                        height={500}
                        alt="Blog Thumbnail"
                        className={styles.img_style}
                      />
                    </div>
                  ) : (
                    // Show upload box if no image is available
                    <div className={styles.model_img_uplodbox_wrapper}>
                      <ImgUplodBox
                        boxtext="Click to select Blog Thumbnail here"
                        handelClick={handleImageUpload}
                        boximgInputaction={true}
                      />
                    </div>
                  )}
                </div>
                <div className={styles.model_input_part}>
                  <div className={styles.inputs_wrapper_container}>
                    <div className={styles.form_element_Box}>
                      <div className={styles.input_lable}>
                        <label>Title</label>
                      </div>
                      <div className={styles.input_wrapper}>
                        <SimpleInput
                          inputPlaceholder="Enter Image Title"
                          inputName="title"
                          inputChnageHandler={handelChange}
                          inputSize="small"
                          inputValue={imgData.title}
                        />
                      </div>
                      <span className={styles.error_msg}>{errors.title}</span>
                    </div>
                    <div className={styles.form_element_Box}>
                      <div className={styles.input_lable}>
                        <label>Alt</label>
                      </div>
                      <div className={styles.input_wrapper}>
                        <SimpleInput
                          inputPlaceholder="Enter Image Alt text"
                          inputName="altText"
                          inputChnageHandler={handelChange}
                          inputSize="small"
                          inputValue={imgData.altText}
                        />
                      </div>
                      <span className={styles.error_msg}>{errors.altText}</span>
                    </div>

                    <div className={styles.form_element_Box}>
                      <div className={styles.input_lable}>
                        <label>caption</label>
                      </div>
                      <div className={styles.input_wrapper}>
                        <SimpleInput
                          inputPlaceholder="Enter Image caption"
                          inputName="caption"
                          inputChnageHandler={handelChange}
                          inputSize="small"
                          inputValue={imgData.caption}
                        />
                      </div>
                      <span className={styles.error_msg}>{errors.caption}</span>
                    </div>

                    <div className={styles.form_element_Box}>
                      <div className={styles.input_lable}>
                        <label>Descreption</label>
                      </div>
                      <div className={styles.input_wrapper}>
                        <SimpleTextArea
                          inputPlaceholder="Enter Image caption"
                          inputName="description"
                          inputChnageHandler={handelChange}
                          inputValue={imgData.description}
                        />
                      </div>
                      <span className={styles.error_msg}>
                        {errors.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.img_model_footer}>
                <div className={styles.model_footer_left}>
                  {/* model_footer_left */}
                  {previewImage && (
                    <div className={`single_icon_wrapper`} onClick={removeImg}>
                      {" "}
                      <MdDelete />{" "}
                    </div>
                  )}

                  {apiData?.blogThumblin?.url && (
                    <div
                      className={`single_icon_wrapper`}
                      onClick={handelDeleteApiImg}
                    >
                      <IoCloseSharp />{" "}
                    </div>
                  )}
                </div>
                {/* model_footer_right */}
                <div className={styles.model_footer_right}>
                  <div>
                    <ClickTextBtn
                      btnText="Update"
                      size="medium"
                      btnLoading={isBtnLoadin}
                      disabledBtn={isValid}
                      clickHandel={handelSubmitImg}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
