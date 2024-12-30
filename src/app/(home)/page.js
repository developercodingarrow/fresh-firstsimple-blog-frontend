import React, { Suspense } from "react";
import styles from "./page.module.css";
import axios from "axios"; // Import axios
import MainCard from "@/src/_components/home/card/MainCard";
import { API_BASE_URL } from "@/config";
import Loading from "./loading";
import Pagination from "./Pagination";
import NotDataFound from "@/src/_components/CustomErrors/NotDataFound";

async function getData(page = 1, limit = 1, tag) {
  const url = `${API_BASE_URL}/blog/all-public-blogs?limit=${limit}&page=${page}&tag=${tag}`;
  try {
    const response = await fetch(url, { cache: "no-store" }); // Disable caching for dynamic content
    if (!response.ok) {
      throw new Error(
        `Failed to fetch data: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json(); // Parse JSON data
    console.log("Fetched data:", data);

    return data; // Assuming the API returns { result, totalPages }
  } catch (error) {
    console.error("Error fetching data:", error.message);
    return { result: [] }; // Default fallback if the request fails
  }
}

// Dynamic Metadata API
export async function generateMetadata({ searchParams }) {
  const tag = searchParams?.tag || "";
  const page = searchParams?.page || 1;

  // Dynamic metadata
  const metadata = {
    title: `Simple Blogs - Page ${page}${tag ? ` | ${tag}` : ""}`,
    description: tag
      ? `Discover insightful blogs about ${tag}.`
      : "Explore a collection of insightful blogs on various topics.",
    keywords: tag ? [`blogs`, `${tag}`, `articles`] : ["blogs", "articles"],
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
      "@id": `https://example.com${tag ? `/blogs/${tag}` : ""}?page=${page}`,
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

export default async function Homepage(pathname) {
  const tagquery = pathname.searchParams?.tag || "";
  const page = parseInt(pathname.searchParams?.page) || 1;
  const limit = 10;

  const { result: blogs, totalPages } = await getData(page, limit, tagquery);
  // Dynamically generate Schema.org JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Simple Blogs - Page ${page}${tagquery ? ` | ${tagquery}` : ""}`,
    description: tagquery
      ? `Discover insightful blogs about ${tagquery}.`
      : "Explore a collection of insightful blogs on various topics.",
    publisher: {
      "@type": "Organization",
      name: "Simple Blogs",
      url: "https://example.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://example.com${
        tagquery ? `/blogs/${tagquery}` : ""
      }?page=${page}`,
    },
    keywords: tagquery ? `blogs, ${tagquery}, articles` : "blogs, articles",
    author: {
      "@type": "Person",
      name: "Admin", // Replace dynamically if possible
    },
  };

  return (
    <div className={`${styles.page_container} mg_botom_lg`}>
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Render MainCard components */}
      <div className={`${styles.card_wrapper} mg_botom_lg`}>
        {blogs.length === 0 ? (
          <NotDataFound msg="No blogs found." />
        ) : (
          blogs.map((el, index) => <MainCard data={el} key={index} />)
        )}
      </div>
      <div className={styles.pagination_wrapper}>
        <Pagination currentPage={page} totalPages={totalPages} tag={tagquery} />
      </div>
    </div>
  );
}
