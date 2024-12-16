"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./blogcomments.module.css";
import CircleImg from "../../userAvatars/CircleImg";
import userAvtar from "../../../../public/web-static-img/user-avatar-img.png";
import TextElements from "../../elements/textElements/TextElements";
import { BsThreeDotsVertical } from "../../ApplicationIcons";
import RepliesList from "./RepliesList";
import ClickTextBtn from "../../buttons/ClickTextBtn";
import ReplyForm from "./ReplyForm";
import { AuthContext } from "@/src/_contextApi/authContext";
import ActionDot from "../../actiondote/ActionDot";

export default function CommentItem(props) {
  const { authUser } = useContext(AuthContext);
  const userId = authUser?._id;
  const {
    data,
    handelReply,
    activeCommentId,
    handelsetCommentId,
    handeldeleteComment,
    handelDeleteReply,
  } = props;

  const handelReplyformOpen = (data) => {
    console.log(data);
    handelsetCommentId(data);
  };

  const commentAction = [{ label: "Delete", handler: handeldeleteComment }];

  return (
    <div className={styles.comment_profile}>
      <div className={styles.comment_user_avtar_wrapper}>
        <CircleImg
          imgSrc={userAvtar}
          avtar_wrapperStyle="maincard_avtar_wrapper"
        />
      </div>
      <div className={styles.comment_content}>
        <TextElements
          text={data.commentBy.name}
          textStyle="small_text semi_bold_text text_color_black"
        />
        <div className="small_text text_color_gray">{data.comment}</div>
        <div className={styles.reply_list_wrapper}>
          {data.replies.length > 0 && (
            <RepliesList
              replies={data.replies}
              comentID={data.id}
              handelDelete={handelDeleteReply}
            />
          )}

          <div className={styles.reply_btn_form_wrapper}>
            <ClickTextBtn
              btnText="Reply"
              size="small_link"
              btnType="link_typeBtn"
              actionID={data._id}
              clickHandel={handelReplyformOpen}
            />
          </div>
          {activeCommentId === data.id && (
            <div>
              {" "}
              <ReplyForm commentId={data.id} onReplyAdded={handelReply} />{" "}
            </div>
          )}
        </div>
      </div>
      {userId === data?.commentBy?._id && (
        <div>
          {/* <BsThreeDotsVertical /> */}
          <ActionDot
            actionList={commentAction}
            actionId={data._id}
            left="-30px"
          />
        </div>
      )}
    </div>
  );
}
