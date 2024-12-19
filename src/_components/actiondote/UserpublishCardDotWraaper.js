"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import ActionDot from "./ActionDot";
import { updateToDraft, deleteBlogAction } from "@/src/app/utils/blogsAction";

export default function UserpublishCardDotWraaper(props) {
  const { elementID } = props;

  const handelDeleteBlog = async (actionId) => {
    try {
      const data = {
        _id: actionId,
      };
      const res = await deleteBlogAction(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handelDraftBlog = async (actionId) => {
    try {
      const data = {
        id: actionId,
      };
      const res = await updateToDraft(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const publishBlogAction = [
    { label: "Draft", handler: handelDraftBlog },
    { label: "Delete", handler: handelDeleteBlog },
  ];
  return (
    <div>
      <ActionDot
        actionList={publishBlogAction}
        actionId={elementID}
        left="-30px"
      />
    </div>
  );
}
