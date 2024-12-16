"use client";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./blogcomments.module.css";
import CommentItem from "./CommentItem";
import { AuthContext } from "@/src/_contextApi/authContext";
import CommentForm from "./CommentForm";
import { useForm } from "react-hook-form";
import SimpleHookInput from "../../elements/formelements/SimpleHookInput";
import ClickTextBtn from "../../buttons/ClickTextBtn";
import SubmitBtn from "../../buttons/SubmitBtn";
import {
  createCommentAction,
  deleteCommentAction,
  deleteCommentReplyAction,
} from "@/src/app/utils/blogCommentActions";

export default function BlogComment(props) {
  const router = useRouter();
  const { blogComments, blogId, blogBy } = props;
  const { authUser } = useContext(AuthContext);
  const userId = authUser?._id;

  // State to manage comments
  const [comments, setComments] = useState(blogComments);
  const [activeCommentId, setActiveCommentId] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const handelCreateComment = async (data) => {
    try {
      const res = await createCommentAction(data);
      console.log(res.data);
      setComments([
        ...comments,
        {
          id: res.data._id,
          comment: res.data.comment,
          commentBy: {
            name: res.data.commentBy.name, // Replace with the actual user's name
            userImg: {
              url: res.data.commentBy.userImg.url,
            },
          },
          replies: [],
        },
      ]);
      router.refresh();
    } catch (error) {}
  };

  const handleReplyAdded = (commentId, newReply) => {
    // Find the comment to update

    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment.id === commentId
          ? { ...comment, replies: [...comment.replies, newReply] }
          : comment
      )
    );
    router.refresh();
    setActiveCommentId(null);
  };

  const handelsetActivId = (data) => {
    setActiveCommentId(data);
  };

  const deleteComment = async (data) => {
    console.log("data--", data);
    const formData = {
      commentId: data,
    };
    try {
      const res = await deleteCommentAction(formData); // Call the API function

      if (res.data.status === "success") {
        console.log(res);
        const updatedComments = comments.filter(
          (comment) => comment.id !== formData.commentId
        );
        setComments(updatedComments);
      } else {
        // Handle cases where status is not "Success"
        console.error("Failed to delete comment", res.message);
      }
    } catch (error) {
      console.error("Failed to delete comment", error);

      // Optionally show a notification or undo option
      // Restore the comment if the delete fails
      setComments([...comments, { id: res.commentId }]); // Restore comment
    }
  };

  const deleteReply = async (data) => {
    try {
      const res = await deleteCommentReplyAction(data);
      console.log(res);
      if (res.data.status === "success") {
        // Optimistically remove the reply from the UI
        const updatedComments = comments.map((comment) => {
          if (comment.id === data.commentId) {
            return {
              ...comment,
              replies: comment.replies.filter(
                (reply) => reply._id !== data.replyId
              ),
            };
          }
          return comment;
        });
        setComments(updatedComments);
      }
    } catch (error) {
      console.error("Failed to delete comment", error);
    }
  };

  return (
    <div className={styles.main_container}>
      <div className={`mg_botom_lg section_medium_heading`}>Comment</div>
      {userId ? (
        <form onSubmit={handleSubmit(handelCreateComment)}>
          <div className={styles.comment_input_wrapper}>
            <div className={styles.input_wrapper}>
              <input
                type="hidden"
                name="blog"
                value={blogId}
                className={`${styles.input_style} ${styles["small"]}`}
                {...register("blog")}
              />
              <input
                type="text"
                placeholder="Add a Cooment"
                name="comment"
                className={`${styles.input_style} ${styles["small"]}`}
                {...register("comment", { required: true })}
              />
            </div>
            <div className={styles.btn_wrapper}>
              <SubmitBtn btnText="Comment" size="small" />
            </div>
          </div>
        </form>
      ) : (
        <div className={styles.not_logined_Bar}>
          <div className="small_text">Tell us what you think... </div>
        </div>
      )}

      <div className={styles.comment_list}>
        <div className={styles.comment_item}>
          {comments.map((el, index) => {
            return (
              <CommentItem
                data={el}
                key={index}
                activeCommentId={activeCommentId}
                handelsetCommentId={handelsetActivId}
                handelReply={handleReplyAdded}
                handeldeleteComment={deleteComment}
                handelDeleteReply={deleteReply}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
