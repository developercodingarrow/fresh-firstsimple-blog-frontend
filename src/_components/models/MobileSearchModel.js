"use client";
import React, { useContext, useState } from "react";
import styles from "./css/mobilesearchmodel.module.css";
import { useParams, useRouter } from "next/navigation";
import { MdKeyboardArrowLeft, HiMagnifyingGlass } from "../ApplicationIcons";
import Link from "next/link";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function MobileSearchModel(props) {
  const router = useRouter();
  const { suggestList } = props;
  const [searchText, setSearchText] = useState("");
  const [filteredTags, setFilteredTags] = useState(suggestList);
  const [model, setmodel] = useState(false);
  const { isMobileSearchModel, handelTogleMobileSearch } =
    useContext(AppContext);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    // Show suggestions only if input has 3 or more characters
    if (value.length >= 3) {
      const suggestions = suggestList.filter((tag) =>
        tag.tagName.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTags(suggestions);
    } else {
      setFilteredTags(suggestList); // Clear suggestions if input is less than 3 characters
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && searchText.trim()) {
      const formattedText = searchText
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-"); // Replace spaces with dashes and make lowercase
      router.push(`?tag=${formattedText}`);
    }
  };

  return (
    <div
      className={`${styles.model_full_container} ${
        isMobileSearchModel ? styles.visible : ""
      }`}
    >
      <div className={styles.search_header}>
        <div
          className={styles.back_arrow_Box}
          onClick={handelTogleMobileSearch}
        >
          <MdKeyboardArrowLeft />
        </div>
        <div className={styles.search_container}>
          <div className={styles.search_input_box}>
            <input
              className={styles.search_input}
              placeholder="search..."
              value={searchText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
          <div className={styles.search_iconBox}>
            <HiMagnifyingGlass />
          </div>
        </div>
      </div>
      <div className={styles.sugest_list_container}>
        {filteredTags.map((el, index) => {
          return (
            <Link
              href={`tag/${el.tagSlug}`}
              className={styles.suggest_item}
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
