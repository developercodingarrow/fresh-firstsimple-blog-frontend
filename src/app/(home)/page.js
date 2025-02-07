import React from "react";
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
    return data; // Assuming the API returns { result, totalPages }
  } catch (error) {
    return { result: [] }; // Default fallback if the request fails
  }
}

// Dynamic Metadata API
export async function generateMetadata({ searchParams }) {
  const tag = searchParams?.tag || "";
  const page = searchParams?.page || 1;

  // Dynamic metadata
  const metadata = {
    title: `LitVerseHub | Write & Explore Digital Blogs  ${
      tag ? ` |  ${tag}` : ""
    }`,
    description: tag
      ? `Write and explore digital blogs on ${tag} with LitVerseHub.`
      : "Write and explore a diverse collection of digital blogs with LitVerseHub.",
    keywords: tag ? ["blogs", `${tag}`, "articles"] : ["blogs", "articles"],
  };

  // Generate Schema.org structured data
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: metadata.title,
    description: metadata.description,
    publisher: {
      "@type": "Organization",
      name: "LitVerseHub Blogs",
      url: "https://litversehub.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://litversehub.com${
        tag ? `/blogs/${tag}` : ""
      }?page=${page}`,
    },
    keywords: metadata.keywords.join(", "),
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
    name: `LitVerseHub - Page ${page}${tagquery ? ` | ${tagquery}` : ""}`,
    description: tagquery
      ? `Write and explore digital blogs on ${tagquery}. with LitVerseHub.`
      : "Write and explore a diverse collection of digital blogs with LitVerseHub.",
    publisher: {
      "@type": "Organization",
      name: "LitVerseHub",
      url: "https://litversehub.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://litversehub.com"${
        tagquery ? `/blogs/${tagquery}` : ""
      }?page=${page}`,
    },
    keywords: tagquery ? `blogs, ${tagquery}, articles` : "blogs, articles",
  };

  return (
    <div className={`mg_botom_lg`}>
      {/* Inject Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Render MainCard components */}
      <div className={`mg_botom_lg`}>
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
