"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import ActionDot from "./ActionDot";
import { deleteBlogAction } from "@/src/app/utils/blogsAction";

export default function DraftCardWrapper(props) {
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

  const handelEditBlog = async (id, slug) => {
    alert("slug--", slug);
  };

  const publishBlogAction = [
    { label: "Edit", handler: handelEditBlog },
    { label: "Delete", handler: handelDeleteBlog },
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
