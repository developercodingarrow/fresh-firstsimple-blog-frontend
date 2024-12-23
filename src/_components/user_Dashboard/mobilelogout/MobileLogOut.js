"use client";
import React, { useRef, useContext, useEffect } from "react";
import { IoPower } from "../../ApplicationIcons";
import { LogOutAction } from "@/src/app/utils/userAuthaction";
import { useRouter } from "next/navigation";
export default function MobileLogOut(props) {
  const router = useRouter();
  const handellogOut = async () => {
    try {
      const res = await LogOutAction();
      console.log(res);
      if (res.data.status === "success") {
        router.refresh();
      }
    } catch (error) {}
  };
  return (
    <div onClick={handellogOut}>
      <IoPower />
    </div>
  );
}
