"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import ActionDot from "./ActionDot";
import { deleteBlogAction } from "@/src/app/utils/blogsAction";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";

export default function DraftCardWrapper(props) {
  const { elementID } = props;
  const router = useRouter();
  const { handelOpenDeleteModel } = useContext(ModelsContext);

  const handelOpenModelDelete = (actionId) => {
    handelOpenDeleteModel(actionId, deleteBlogAction);
  };

  const handelEditBlog = async (id, slug) => {
    router.push(`/content/${id}`);
  };

  const publishBlogAction = [
    { label: "Edit", handler: handelEditBlog },
    { label: "Delete", handler: handelOpenModelDelete },
  ];

  return (
    <div>
      <ActionDot
        actionList={publishBlogAction}
        actionId={elementID}
        slug={elementID}
        left="-30px"
      />
    </div>
  );
}
