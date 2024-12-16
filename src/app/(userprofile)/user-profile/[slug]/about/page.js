import React, { Suspense } from "react";

import { API_BASE_URL } from "@/config";

export default async function UserAboutpage(pathname) {
  const slug = pathname.params?.slug;

  let data;
  try {
    // Fetch the web stats using the auth token
    const res = await fetch(`${API_BASE_URL}/user/user-details/${slug}`, {
      method: "GET", // GET request to fetch the blog
      credentials: "include", // Include cookies in the request
      headers: {
        "Content-Type": "application/json", // Ensure this is set to JSON
      },
    });

    const initalData = await res.json();
    if (initalData.status === "success") {
      data = initalData.result;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    data = null;
  }

  return (
    <div>
      {" "}
      <Suspense fallback={<h1>Loading...</h1>}>
        <p
          dangerouslySetInnerHTML={{
            __html: data?.bio || "",
          }}
          // className={styles.content}
        ></p>
      </Suspense>
    </div>
  );
}
