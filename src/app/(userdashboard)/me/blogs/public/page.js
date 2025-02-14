import React from "react";
import { userPublisedBlogsAction } from "@/src/app/utils/blogsAction";
import { cookies } from "next/headers"; // Import cookies here
import PublishedBlogCard from "@/src/_components/cards/PublishedBlogCard";
import styles from "../../../page.module.css";
import CustomeMsg from "@/src/_components/CustomErrors/CustomeMsg";

export const metadata = {
  title: "LitVerseHub | published Content",
  description: "LitVerseHub – Your digital hub for writers and readers.",
};

export default async function PublicBlogpage() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("jwt")?.value; // Access cookies directly here

  let initialData;
  try {
    const res = await userPublisedBlogsAction(authToken);

    if (res.error) {
      return <CustomeMsg msg={res.error} />;
    }
    if (res.status === "success") {
      initialData = res.result;
    } else {
      initialData = [];
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    initialData = []; // Handle the case where data is not found
  }
  return (
    <div className={styles.page_container}>
      {initialData.map((el, index) => {
        return (
          <div key={index}>
            <PublishedBlogCard data={el} key={index} />
          </div>
        );
      })}
    </div>
  );
}
