"use client";
import CreateUi from "@/src/_components/new-content/layoutUi/CreateUi";
import React from "react";

export default function CreateBlogwrapper(props) {
  const { apiData, slug } = props;
  console.log(apiData);
  return (
    <div>
      <CreateUi apiData={apiData} slug={slug} />
    </div>
  );
}
