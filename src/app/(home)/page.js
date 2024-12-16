import React, { Suspense } from "react";
import axios from "axios"; // Import axios
import MainCard from "@/src/_components/home/card/MainCard";
import { API_BASE_URL } from "@/config";
import { tagfillterBlogs } from "../utils/blogsAction";

async function getData(tagquery, page = 1) {
  try {
    const res = await tagfillterBlogs(tagquery, page);
    if (!res.result) {
      return [];
    }
    return await res.result;
  } catch (error) {
    console.log("erroe");
  }
}
export default async function Homepage(pathname) {
  const tagquery = pathname.searchParams?.tag || "";
  const page = pathname.searchParams?.page || 1;

  const initialData = await getData(tagquery, page);
  return (
    <div className="mg_botom_lg">
      <Suspense fallback={<h1>loading...</h1>}>
        {initialData.map((el, index) => (
          <MainCard data={el} key={index} />
        ))}
      </Suspense>
    </div>
  );
}
