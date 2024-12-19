"use client";
import React, { useState } from "react";
import styles from "./css/appnavbar.module.css";
import { HiMagnifyingGlass } from "../../ApplicationIcons";
import Link from "next/link";
export default function NavSearchBar(props) {
  const tags = [
    {
      tagName: "real estate",
      tagSlug: "real-estate",
    },
    {
      tagName: "bollewood",
      tagSlug: "bollewood",
    },
    {
      tagName: "news",
      tagSlug: "news",
    },
    {
      tagName: "property",
      tagSlug: "property",
    },
    {
      tagName: "technology",
      tagSlug: "technology",
    },
    {
      tagName: "javascript",
      tagSlug: "javascript",
    },
    {
      tagName: "insurence",
      tagSlug: "insurence",
    },
    {
      tagName: "loans",
      tagSlug: "loans",
    },

    {
      tagName: "entertment",
      tagSlug: "entertment",
    },
    {
      tagName: "movie",
      tagSlug: "movie",
    },
  ];

  const [searchText, setSearchText] = useState(""); // To manage search input
  const [filteredTags, setFilteredTags] = useState([]); // To store filtered suggestions

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    // Show suggestions only if input has 3 or more characters
    if (value.length >= 3) {
      const suggestions = tags.filter((tag) =>
        tag.tagName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTags(suggestions);
    } else {
      setFilteredTags([]); // Clear suggestions if input is less than 3 characters
    }
  };

  return (
    <div className={styles.nav_search_wrapper}>
      <div className={styles.search_container}>
        <div className={styles.search_iconBox}>
          <HiMagnifyingGlass />
        </div>
        <div className={styles.search_input_box}>
          <input
            className={styles.search_input}
            placeholder="search..."
            value={searchText}
            onChange={handleInputChange}
          />
        </div>
      </div>

      {/* Search Suggestion List */}
      {filteredTags.length > 0 && (
        <div className={styles.search_list}>
          {filteredTags.map((el, index) => (
            <Link
              href={`/${el.tagSlug}`}
              className={styles.suggest_item}
              key={index}
            >
              {el.tagName}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
