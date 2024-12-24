import React, { Suspense } from "react";
import { API_BASE_URL } from "@/config";
import SingleBlogUi from "@/src/_components/singleBlog/layout/SingleBlogUi";
export default async function SingleBlogpage({ params }) {
  const { slug } = params;
  let data;
  try {
    const res = await fetch(`${API_BASE_URL}/blog/public-single-blog/${slug}`, {
      method: "GET", // GET request to fetch the blog
      credentials: "include", // Include cookies in the request
      headers: {
        "Content-Type": "application/json", // Ensure this is set to JSON
      },
    });

    const initalData = await res.json();
    data = initalData.result;
  } catch (error) {
    console.error("Error fetching data:", error);
    data = null;
  }
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <SingleBlogUi data={data} />
      </Suspense>
    </div>
  );
}
