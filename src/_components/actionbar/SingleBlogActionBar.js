"use client";
import React, { useContext, useEffect } from "react";

import styles from "./css/singleblogactionbar.module.css";
import UserDetailsAvatar from "../userAvatars/UserDetailsAvatar";
import { FaComment } from "../ApplicationIcons";
import MainCardActionDotWrapper from "../actiondote/MainCardActionDotWrapper";
import LikeAction from "../like_actions/LikeAction";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import { blogViewCountAction } from "@/src/app/utils/blogLikeActions";
import ViewCount from "./ViewCount";

export default function SingleBlogActionBar(props) {
  const { data } = props;
  const { handelOpenMobileCommentModel } = useContext(ModelsContext);

  return (
    <div className={styles.action_bar}>
      <div>
        <UserDetailsAvatar
          boldText="sanjay"
          dateText={data?.createdAt}
          avtar_wrapper="maincard_avtar_wrapper"
        />
      </div>
      <div className={styles.actions_wrapper}>
        <LikeAction postLikes={data?.likes} elementID={data?._id} />
        <ViewCount data={data} />
        <div
          className={styles.mobile_onlycard_icon_details}
          onClick={handelOpenMobileCommentModel}
        >
          <div className={styles.icon_box}>
            <FaComment />
          </div>
          <div className={styles.icon_details}>{data.comments.length}</div>
        </div>
        <div className={styles.dekstop_onlycard_icon_details}>
          <div className={styles.icon_box}>
            <FaComment />
          </div>
          <div className={styles.icon_details}>{data.comments.length}</div>
        </div>

        <div className={styles.card_icon_details}>
          <div className={styles.icon_box}>
            <MainCardActionDotWrapper elementID={data?._id} />
          </div>
        </div>
      </div>
    </div>
  );
}
