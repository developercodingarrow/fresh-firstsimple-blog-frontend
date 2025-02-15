"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
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
      if (res.error) {
        toast.error(res.error);
        return;
      }

      if (res.data.status === "success") {
        toast.success("Blog added to drafts");
        router.refresh();
      }
    } catch (error) {
      toast.error("Oops! Something went wrong.");
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
      <Toaster
        toastOptions={{
          className: "medium__text ",
        }}
      />
      <ActionDot
        actionList={publishBlogAction}
        actionId={elementID}
        left="-30px"
      />
    </div>
  );
}
