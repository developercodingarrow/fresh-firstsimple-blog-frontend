import { API_BASE_URL } from "@/config";
import BlogTopicWrapper from "@/src/_components/blog_topic/layout/BlogTopicWrapper";
import AlternativeNotFound from "@/src/_components/CustomErrors/AlternativeNotFound";
import React from "react";

// Function to generate metadata dynamically
export async function generateMetadata() {
  let metadata = {
    title: "LitVerseHub | Blog Topics",
    description: "Explore various blog topics",
  };

  try {
    const res = await fetch(`${API_BASE_URL}/tag/Verification-tags`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.status === 200) {
      const initalData = await res.json();
      const data = initalData.results;
      if (data && data.length > 0) {
        metadata.title = `LitVerseHub | Blog Topics`;
        metadata.description = `Explore topics related to ${data[0].name}`;
      }
    }
  } catch (error) {
    console.error("Error fetching metadata:", error);
  }

  return metadata;
}

export default async function BlogTopicpage() {
  let data;
  try {
    const res = await fetch(`${API_BASE_URL}/tag/Verification-tags`, {
      method: "GET", // GET request to fetch the blog
      credentials: "include", // Include cookies in the request
      headers: {
        "Content-Type": "application/json", // Ensure this is set to JSON
      },
    });
    if (res.status === 404) {
      return <AlternativeNotFound />;
    }
    if (res.status === 200) {
      const initalData = await res.json();
      data = initalData.results;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    data = null;
    throw new Error(`Failed to fetch data: ${error}`);
  }
  // Dynamically generate Schema.org JSON-LD
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Blog Topics",
    description: "Explore various blog topics",
    itemListElement: data.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://example.com/tag/${item.tagSlug}`, // Ensure the URL matches your site's structure
      name: item.tagName,
    })),
  };

  return (
    <div>
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogTopicWrapper data={data} />
    </div>
  );
}
