import React from "react";
import { userDraftBlogsAction } from "@/src/app/utils/blogsAction";
import UserauthCard from "@/src/_components/cards/UserauthCard";
import { cookies } from "next/headers"; // Import cookies here

export default async function DraftBlogspage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value; // Access cookies directly here

  let initialData;
  try {
    const res = await userDraftBlogsAction(authToken);
    if (res.error) {
      initialData = [];
    } else if (res.status === "success") {
      initialData = res.result;
    } else {
      initialData = [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    initialData = []; // Handle the case where data is not found
  }
  return (
    <div>
      {initialData.map((el, index) => {
        return (
          <div key={index}>
            <UserauthCard />
          </div>
        );
      })}
    </div>
  );
}