"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ActionDot from "./ActionDot";
import { updateToDraft, deleteBlogAction } from "@/src/app/utils/blogsAction";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";

export default function UserpublishCardDotWraaper(props) {
  const { elementID } = props;
  const router = useRouter();
  const { handelOpenDeleteModel } = useContext(ModelsContext);

  const handelOpenModelDelete = (actionId) => {
    handelOpenDeleteModel(actionId, deleteBlogAction);
  };

  const handelDraftBlog = async (actionId) => {
    try {
      const data = {
        id: actionId,
      };
      const res = await updateToDraft(data);
      console.log(res);
      router.refresh();
    } catch (error) {
      console.log(error);
    }
  };

  const handelEditBlog = async (id, slug) => {
    router.push(`/content/${id}`);
  };

  const publishBlogAction = [
    { label: "Draft", handler: handelDraftBlog },
    { label: "Delete", handler: handelOpenModelDelete },
    { label: "Edit", handler: handelEditBlog },
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
