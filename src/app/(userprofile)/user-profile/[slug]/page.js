import { API_BASE_URL } from "@/config";
import CustomeMsg from "@/src/_components/CustomErrors/CustomeMsg";
import NotDataFound from "@/src/_components/CustomErrors/NotDataFound";
import MainCard from "@/src/_components/home/card/MainCard";
import React from "react";

export default async function UserProfilepage(pathname) {
  const slug = pathname.params?.slug;

  let data;
  try {
    // Fetch the web stats using the auth token

    const res = await fetch(
      `${API_BASE_URL}/user-profile/user-publidhed-blogs/${slug}`,
      {
        method: "GET", // GET request to fetch the blog
        credentials: "include", // Include cookies in the request
        headers: {
          "Content-Type": "application/json", // Ensure this is set to JSON
        },
      }
    );

    const initalData = await res.json();
    if (initalData.status === "fail") {
      return <CustomeMsg msg={initalData.message} />;
    }

    if (initalData.status === "success") {
      data = initalData.result;
    }
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error}`);
  }
  return (
    <div>
      <div className="mg_botom_lg">
        {data.map((el, index) => {
          return <MainCard data={el} key={index} />;
        })}
      </div>
    </div>
  );
}
