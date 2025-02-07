"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./css/appnavbar.module.css";
import { HiMagnifyingGlass } from "../../ApplicationIcons";
import Link from "next/link";
import { tagList } from "@/src/jsonData/staticData";

export default function NavSearchBar(props) {
  const { searchSuggest = tagList } = props;
  const router = useRouter();
  const [searchText, setSearchText] = useState(""); // To manage search input
  const [filteredTags, setFilteredTags] = useState([]); // To store filtered suggestions

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    // Show suggestions only if input has 3 or more characters
    if (value.length >= 3) {
      const suggestions = searchSuggest.filter((tag) =>
        tag.tagName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTags(suggestions);
    } else {
      setFilteredTags([]); // Clear suggestions if input is less than 3 characters
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchText.trim()) {
      const formattedText = searchText
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-"); // Replace spaces with dashes and make lowercase
      router.push(`/?tag=${formattedText}`);
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
            className={`${styles.search_input} medium__text text_color_bold_gray`}
            placeholder="search..."
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      {/* Search Suggestion List */}
      {filteredTags.length > 0 && (
        <div className={styles.search_list}>
          {filteredTags.map((el, index) => (
            <Link
              href={`tag/${el.tagSlug}`}
              className={`${styles.suggest_item} capitalize_text text_color_bold_gray small_text`}
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
