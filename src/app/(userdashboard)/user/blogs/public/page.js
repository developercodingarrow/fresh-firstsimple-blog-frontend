import UserauthCard from "@/src/_components/cards/UserauthCard";
import React from "react";

export default function PublicBlogpage() {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => {
        return (
          <div key={index}>
            <UserauthCard />
          </div>
        );
      })}
    </div>
  );
}
