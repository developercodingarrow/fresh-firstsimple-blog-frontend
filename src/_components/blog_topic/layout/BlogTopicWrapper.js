"use client";
import React, { useState, useEffect } from "react";
import styles from "./blogtopicwrapper.module.css";
import dynamic from "next/dynamic";
import Link from "next/link";
import TagSearch from "../tagSearch/TagSearch";
export default function BlogTopicWrapper(props) {
  const { data } = props;
  // State to manage filtered tags
  const [filteredTags, setFilteredTags] = useState(data);

  // Handle search input change
  const handleSearch = (searchTerm) => {
    if (searchTerm === "") {
      setFilteredTags(data);
    } else {
      const filtered = data.filter((el) =>
        el.tagName.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTags(filtered);
    }
  };

  useEffect(() => {
    setFilteredTags(data);
  }, [data]);

  return (
    <div className={styles.main_container}>
      <div className={styles.flex_header}>
        <div className={styles.heading_box}>
          <h1>Browse Blog Toipc</h1>
        </div>
        <div className={styles.search_box}>
          <TagSearch onSearch={handleSearch} />
        </div>
      </div>
      <div className={styles.tag_wrapper}>
        {filteredTags.map((el, index) => {
          return (
            <Link
              href={`/tag/${el.tagSlug}`}
              className={`${styles.tag_box} medium__text `}
              key={index}
            >
              {el.tagName}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
