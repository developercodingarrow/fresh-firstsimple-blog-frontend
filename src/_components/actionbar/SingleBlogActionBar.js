"use client";
import React from "react";
import styles from "./css/singleblogactionbar.module.css";
import UserDetailsAvatar from "../userAvatars/UserDetailsAvatar";
import {
  BsThreeDotsVertical,
  FaHeart,
  IoEyeOutline,
  FaComment,
} from "../ApplicationIcons";
import MainCardActionDotWrapper from "../actiondote/MainCardActionDotWrapper";
import LikeAction from "../like_actions/LikeAction";
export default function SingleBlogActionBar(props) {
  const { data } = props;
  return (
    <div className={styles.action_bar}>
      <div>
        <UserDetailsAvatar
          boldText="sanjay"
          lightText="24-aug-2024"
          avtar_wrapper="maincard_avtar_wrapper"
        />
      </div>
      <div className={styles.actions_wrapper}>
        <LikeAction postLikes={data.likes} elementID={data._id} />
        <div className={styles.card_icon_details}>
          <div className={styles.icon_box}>
            {" "}
            <IoEyeOutline />{" "}
          </div>

          <div className={styles.icon_details}>1500</div>
        </div>
        <div className={styles.card_icon_details}>
          <div className={styles.icon_box}>
            <FaComment />
          </div>
          <div className={styles.icon_details}>{data.comments.length}</div>
        </div>
        <div className={styles.card_icon_details}>
          <div className={styles.icon_box}>
            <MainCardActionDotWrapper />
          </div>
        </div>
      </div>
    </div>
  );
}
