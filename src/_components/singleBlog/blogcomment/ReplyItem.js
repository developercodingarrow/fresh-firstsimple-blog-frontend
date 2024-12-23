"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./blogcomments.module.css";
import CircleImg from "../../userAvatars/CircleImg";
import userAvtar from "../../../../public/web-static-img/user-avatar-img.png";
import TextElements from "../../elements/textElements/TextElements";
import { BsThreeDotsVertical } from "../../ApplicationIcons";
import { AuthContext } from "@/src/_contextApi/authContext";
import ActionDot from "../../actiondote/ActionDot";
export default function ReplyItem(props) {
  const { authUser } = useContext(AuthContext);
  const userId = authUser?._id;
  const { data, handelDelete, comentid } = props;

  const replyAction = [{ label: "Delete", handler: handelDelete }];
  const actionArguments = {
    commentId: comentid,
    replyId: data._id,
  };

 

  return (
    <div className={styles.comment_profile}>
      <div className={styles.comment_user_avtar_wrapper}>
        <CircleImg
          imgSrc={data.replyBy.userImg}
          imgDirectoryPath="/usersProfileImg"
          avtar_wrapperStyle="maincard_avtar_wrapper"
        />
      </div>
      <div className={styles.comment_content}>
        <TextElements
          text={data?.replyBy?.name}
          textStyle="small_text semi_bold_text text_color_black"
        />
        <div className="small_text text_color_gray">{data?.comment}</div>
      </div>
      {userId === data?.replyBy?._id && (
        <div>
          <ActionDot
            actionList={replyAction}
            actionId={actionArguments}
            left="-30px"
          />
        </div>
      )}
    </div>
  );
}
