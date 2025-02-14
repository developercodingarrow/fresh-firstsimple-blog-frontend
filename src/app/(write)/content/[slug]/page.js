import React from "react";
import CreateBlogwrapper from "./wrapper";
import { getSingleAuthBlog } from "@/src/app/utils/blogsAction";

export const metadata = {
  title: "LitVerseHub | Update Content",
  description:
    "LitVerseHub – Your digital hub for writers and readers. Manage and update your stories, articles, or posts effortlessly to ensure your work stays fresh and relevant.",
};

async function getData(slug) {
  try {
    const res = await getSingleAuthBlog(slug);
    if (res.error) {
      throw new Error(`${res.error}`);
    }
    if (res.status === "success") {
      return res.result;
    }
    // Handle blog fetch failure
  } catch (error) {
    throw new Error(`${error}`);
  }
}
export default async function CreateNewPostpage(pathname) {
  const slug = pathname?.params?.slug;
  const initialData = await getData(slug);
  return (
    <div>
      <CreateBlogwrapper apiData={initialData} slug={slug} />
    </div>
  );
}
