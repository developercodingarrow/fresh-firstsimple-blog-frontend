"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import ActionDot from "./ActionDot";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";

export default function MainCardActionDotWrapper(props) {
  const { elementID } = props;
  const { handelOpenReportModel } = useContext(ModelsContext);

  const handelOpenreportModel = async (actionId) => {
    handelOpenReportModel(elementID);
  };

  const blogReportAction = [
    { label: "Report", handler: handelOpenreportModel },
    { label: "Hide", handler: handelOpenreportModel },
  ];
  return (
    <div>
      <ActionDot
        actionList={blogReportAction}
        actionId={elementID}
        left="-30px"
      />
    </div>
  );
}
