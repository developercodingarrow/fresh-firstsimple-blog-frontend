import React from "react";
import styles from "../page.module.css";
import MainCard from "@/src/_components/home/card/MainCard";
import { API_BASE_URL } from "@/config";
import NotDataFound from "@/src/_components/CustomErrors/NotDataFound";

export async function generateMetadata({ params }) {
  const { slug } = params;
  const res = await fetch(`${API_BASE_URL}/blog/public-tag-blogs/${slug}`);
  // Dynamic metadata
  const metadata = {
    title: `Simple Blogs - ${slug}}}`,
    description: `Discover insightful blogs about ${slug}}.`,
    keywords: [`blogs`, `articles`, `${slug}`],
  };
  // Generate Schema.org structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: metadata.title,
    description: metadata.description,
    publisher: {
      "@type": "Organization",
      name: "Simple Blogs",
      url: "https://example.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://example.com/tag/${slug}`,
    },
    keywords: metadata.keywords.join(", "),
    author: {
      "@type": "Person",
      name: "Admin", // Replace with the blog author's name dynamically
    },
  };

  return {
    ...metadata,
    openGraph: {
      title: metadata.title,
      description: metadata.description,
    },
    additionalMetaTags: [
      {
        name: "keywords",
        content: metadata.keywords.join(", "),
      },
    ],
    schema, // Attach schema for use in React component
  };
}

export default async function TagBlogspage(pathname) {
  const slug = pathname.params?.slug;
  const formatSlug = (slug) => {
    if (!slug) return "";
    return slug
      .split("-") // Split the string by hyphens
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(" "); // Join the words with spaces
  };
  let data;
  try {
    // Fetch the web stats using the auth token

    const res = await fetch(`${API_BASE_URL}/blog/public-tag-blogs/${slug}`, {
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
    throw new Error(`Failed to fetch data: ${error}`);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Simple Blogs - ${slug}}}`,
    description: "Explore a collection of insightful blogs on various topics.",
    publisher: {
      "@type": "Organization",
      name: "Simple Blogs",
      url: "https://example.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://example.com/tag/${slug}`,
    },
    keywords: [`blogs`, `articles`, `${slug}`],
    author: {
      "@type": "Person",
      name: "Admin", // Replace with the blog author's name dynamically
    },
  };

  return (
    <div className="mg_botom_lg">
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Render MainCard components */}
      <div className={styles.page_tag_wrapper}>
        <div className={styles.page_tag}>
          {" "}
          {formatSlug(slug)} <span>-</span> <span> {data.length}</span>{" "}
        </div>
      </div>
      <div className={`${styles.card_wrapper} mg_botom_lg`}>
        {data.length === 0 ? (
          <NotDataFound msg="No blogs found." />
        ) : (
          data.map((el, index) => <MainCard data={el} key={index} />)
        )}
      </div>
    </div>
  );
}
