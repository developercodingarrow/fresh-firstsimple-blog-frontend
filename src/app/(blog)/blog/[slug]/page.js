import React, { Suspense } from "react";
import { API_BASE_URL } from "@/config";
import SingleBlogUi from "@/src/_components/singleBlog/layout/SingleBlogUi";
import AlternativeNotFound from "@/src/_components/CustomErrors/AlternativeNotFound";

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/blog/public-single-blog/${params.slug}`
    );
    if (res.status !== 200) {
      // Return default metadata in case of failure
      return {
        title: "Default Title",
        description: "Default description",
        canonical: `https://pinbuzzers.com/blog/${params.slug}`,
        openGraph: {
          title: "Default Title",
          description: "Default description",
          images: [{ url: "/default-image.jpg", alt: "Blog Thumbnail" }],
        },
        twitter: {
          cardType: "summary_large_image",
          title: "Default Title",
          description: "Default description",
          image: "/default-image.jpg",
        },
        schema: {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: "Default Title",
          description: "Default description",
          image: "/default-image.jpg",
          author: { "@type": "Person", name: "Default Author" },
          datePublished: new Date().toISOString(),
          publisher: {
            "@type": "Organization",
            name: "pinbuzzers",
            logo: {
              "@type": "ImageObject",
              url: "https://pinbuzzers.com/web-static-img/dummy-logo.png",
            },
          },
        },
      };
    }

    const data = await res.json();

    return {
      title: data.result.blogTitle || "Default Title",
      description: data.result.metaDescription || "Default description",
      canonical: `https://pinbuzzers.com/blog/${params.slug}`,
      openGraph: {
        title: data.result.blogTitle || "Default Title",
        description: data.result.metaDescription || "Default description",
        images: [
          {
            url:
              `https://pinbuzzers.com/blogthumblin/${data.result.blogThumblin?.url}` ||
              "/default-image.jpg",
            alt: data.result.blogThumblin?.altText || "Blog Thumbnail",
          },
        ],
        article: {
          publishedTime: data.result.publishedAt,
          authors: [data.result.author?.name || "Default Author"],
        },
      },
      twitter: {
        cardType: "summary_large_image",
        title: data.result.blogTitle || "Default Title",
        description: data.result.metaDescription || "Default description",
        image:
          `https://pinbuzzers.com/blogthumblin/${data.result.blogThumblin?.url}` ||
          "/default-image.jpg",
      },
      additionalMetaTags: [
        {
          name: "keywords",
          content: data.result.tags?.join(", ") || "default, keywords",
        },
      ],
      schema: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: data.result.blogTitle || "Default Title",
        description: data.result.metaDescription || "Default description",
        image: data.result.blogThumblin?.url || "/default-image.jpg",
        author: {
          "@type": "Person",
          name: data.result.author?.name || "Default Author",
        },
        datePublished: data.result.createdAt || new Date().toISOString(),
        publisher: {
          "@type": "Organization",
          name: "pinbuzzers",
          logo: {
            "@type": "ImageObject",
            url: "https://pinbuzzers.com/web-static-img/dummy-logo.png",
          },
        },
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Default Title",
      description: "Default description",
      canonical: "https://pinbuzzers.com/blog/404",
      openGraph: {
        title: "Default Title",
        description: "Default description",
        images: [{ url: "/default-image.jpg", alt: "Blog Thumbnail" }],
      },
      twitter: {
        cardType: "summary_large_image",
        title: "Default Title",
        description: "Default description",
        image: "/default-image.jpg",
      },
      schema: {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: "Default Title",
        description: "Default description",
        image: "/default-image.jpg",
        author: { "@type": "Person", name: "Default Author" },
        datePublished: new Date().toISOString(),
        publisher: {
          "@type": "Organization",
          name: "pinbuzzers",
          logo: {
            "@type": "ImageObject",
            url: "https://pinbuzzers.com/web-static-img/dummy-logo.png",
          },
        },
      },
    };
  }
}

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
    if (res.status === 404) {
      return <AlternativeNotFound />;
    }
    if (res.status === 200) {
      const initalData = await res.json();
      data = initalData.result;
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    data = null;
    throw new Error(`Failed to fetch data: ${error}`);
  }
  return (
    <div>
      <Suspense fallback={<h1>Loading...</h1>}>
        <SingleBlogUi data={data} />
      </Suspense>
    </div>
  );
}
