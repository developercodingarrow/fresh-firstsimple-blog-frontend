"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./replyform.module.css";
import { useForm } from "react-hook-form";
import SubmitBtn from "../../buttons/SubmitBtn";
import { createReplyAction } from "@/src/app/utils/blogCommentActions";

export default function ReplyForm(props) {
  const { commentId, onReplyAdded } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const handelCreateReply = async (formData) => {
    try {
      const res = await createReplyAction(formData);
      if (res.data.status === "success") {
        const newTempReply = {
          comment: res.formData.comment,
          replyBy: { name: res.data.commentToUpdate.commentBy.name }, // Replace with actual user's name
          createdAt: new Date().toISOString(), // Current timestamp
        };
        onReplyAdded(formData.commentId, newTempReply);
        reset();
      }
    } catch (error) {}
  };

  return (
    <div className={styles.reply_form_container}>
      <form onSubmit={handleSubmit(handelCreateReply)}>
        <div className={styles.comment_input_wrapper}>
          <div className={styles.input_wrapper}>
            <input
              type="hidden"
              name="commentId"
              value={commentId}
              className={`${styles.input_style} ${styles["small"]}`}
              {...register("commentId")}
            />
            <input
              type="text"
              placeholder="Reply..."
              name="comment"
              className={`${styles.input_style} ${styles["small"]}`}
              {...register("comment", { required: true })}
            />
          </div>
          <div className={styles.btn_wrapper}>
            <SubmitBtn btnText="Reply" size="small" />
          </div>
        </div>
      </form>
    </div>
  );
}
