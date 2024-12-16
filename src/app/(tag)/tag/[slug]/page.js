import MainCard from "@/src/_components/home/card/MainCard";
import React from "react";

export default function TagBlogspage() {
  return (
    <div className="mg_botom_lg">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
        return <MainCard />;
      })}
    </div>
  );
}
