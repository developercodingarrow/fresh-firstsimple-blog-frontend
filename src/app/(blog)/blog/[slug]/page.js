import React from "react";
import { API_BASE_URL } from "@/config";
import SingleBlogUi from "@/src/_components/singleBlog/layout/SingleBlogUi";
import AlternativeNotFound from "@/src/_components/CustomErrors/AlternativeNotFound";

export async function generateMetadata({ params }) {
  try {
    const res = await fetch(
      `${API_BASE_URL}/public-blog/public-single-blog/${params.slug}`
    );

    if (res.status !== 200) {
      return {
        title: "Default Title",
        description: "Default description",
        canonical: `https://pinbuzzers.com/blog/${params.slug}`,
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
          breadcrumb: {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://pinbuzzers.com/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Blog",
                item: "https://pinbuzzers.com/blog",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Default Title",
                item: `https://pinbuzzers.com/blog/${params.slug}`,
              },
            ],
          },
        },
      };
    }

    const data = await res.json();

    return {
      title: `LitVerseHub | ${data.result.blogTitle}` || "LitVerseHub",
      description:
        data.result.metaDescription ||
        "Explore a collection of insightful blogs on various topics.",
      canonical: `https://litversehub.com/blog/${params.slug}`,
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
            url: "https://litversehub.com/web-static-img/dummy-logo.png",
          },
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://litversehub.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://litversehub.com/blog",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: data.result.blogTitle || "Default Title",
              item: `https://litversehub.com/blog/${params.slug}`,
            },
          ],
        },
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Default Title",
      description: "Default description",
      canonical: "https://litversehub.com/blog/404",
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
            url: "https://litversehub.com/web-static-img/dummy-logo.png",
          },
        },
        breadcrumb: {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://pinbuzzers.com/",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Blog",
              item: "https://litversehub.com/blog",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Default Title",
              item: `https://litversehub.com/blog/${params.slug}`,
            },
          ],
        },
      },
    };
  }
}

export default async function SingleBlogpage({ params }) {
  const { slug } = params;
  let data;
  try {
    const res = await fetch(
      `${API_BASE_URL}/public-blog/public-single-blog/${slug}`,
      {
        method: "GET", // GET request to fetch the blog
        credentials: "include", // Include cookies in the request
        headers: {
          "Content-Type": "application/json", // Ensure this is set to JSON
        },
      }
      // { cache: "no-store" }
    );
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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data?.blogTitle || "LitVerseHub",
    description:
      data?.metaDescription ||
      "Write and explore a diverse collection of digital blogs with LitVerseHub.",
    image: data?.blogThumblin?.url || "/default-image.jpg",
    author: {
      "@type": "Person",
      name: data?.author?.name || "LitVerseHub",
    },
    datePublished: data?.createdAt || new Date().toISOString(),
    publisher: {
      "@type": "Organization",
      name: "LitVerseHub",
      logo: {
        "@type": "ImageObject",
        url: "https://litversehub.com/web-static-img/dummy-logo.png",
      },
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://litversehub.com/",
        },

        {
          "@type": "ListItem",
          position: 2,
          name: data?.blogTitle || "LitVerseHub",
          item: `https://litversehub.com/blog/${slug}`,
        },
      ],
    },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <SingleBlogUi data={data} />
    </div>
  );
}
