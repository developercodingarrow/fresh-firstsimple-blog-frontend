"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./css/model.module.css";
import ModelHeader from "./modelElements/ModelHeader";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import BlogComment from "../singleBlog/blogcomment/BlogComment";

export default function MobileCommentModel(props) {
  const { data } = props;

  const {
    isMobileCommentModel,
    handelOpenMobileCommentModel,
    handelClosenMobileCommentModel,
  } = useContext(ModelsContext);
  return (
    <div
      className={`${styles.model_full_container} ${
        isMobileCommentModel ? styles.visible : ""
      }`}
    >
      <div
        className={`${styles.model_container} ${styles.mobile_coment_model}`}
      >
        <ModelHeader
          modelTitle="Comment"
          modelCloseHandler={handelClosenMobileCommentModel}
        />
        <div className={styles.comment_model_innerBody}>
          <BlogComment
            blogComments={data.comments}
            blogId={data._id}
            blogBy={data.user}
          />
        </div>
      </div>
    </div>
  );
}
