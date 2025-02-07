"use client";
import React, { useState, useEffect, useContext } from "react";
import styles from "./likeaction.module.css";
import { FaHeart, FaRegHeart } from "../ApplicationIcons";
import { AuthContext } from "@/src/_contextApi/authContext";
import { blogLikeAction } from "@/src/app/utils/blogLikeActions";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";

export default function LikeAction(props) {
  const { authUser } = useContext(AuthContext);
  const { handelOpenAuthModel } = useContext(ModelsContext);
  const userId = authUser?._id;
  const { postLikes = [], elementID } = props;
  const [likeCount, setLikeCount] = useState(postLikes.length); // Initialize with the length of likes array
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    // Determine if the user has liked the blog post
    const userHasLiked = postLikes.includes(userId);
    setLiked(userHasLiked);
  }, [postLikes, userId]);

  const handelLikeAction = async () => {
    try {
      // Optimistically update UI
      if (liked) {
        setLikeCount((prevCount) => prevCount - 1); // Decrease like count
        setLiked(false); // Toggle to 'unliked'
      } else {
        setLikeCount((prevCount) => prevCount + 1); // Increase like count
        setLiked(true); // Toggle to 'liked'
      }

      const res = await blogLikeAction({ _id: elementID });

      if (res.data.status === "success") {
        setLikeCount(res.data.likeCount); // Update likeCount based on server response
      } else {
        setLikeCount(postLikes.length);
        setLiked(postLikes.includes(userId));
      }
    } catch (error) {
      console.error("Error in like/unlike action:", error);
      setLikeCount(postLikes.length);
      setLiked(postLikes.includes(userId));
    }
  };

  return (
    <>
      {authUser ? (
        <div className={styles.container}>
          <div className={styles.icon_box} onClick={handelLikeAction}>
            {liked ? (
              <FaHeart className={styles.liked_iconStyle} />
            ) : (
              <FaRegHeart />
            )}
          </div>
          <div className={styles.icon_details}>{likeCount}</div>
        </div>
      ) : (
        <div className={styles.container} onClick={handelOpenAuthModel}>
          <div className={styles.icon_box}>
            <FaHeart />
          </div>
          <div className={styles.icon_details}>{likeCount}</div>
        </div>
      )}
    </>
  );
}
