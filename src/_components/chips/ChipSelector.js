"use client";
import React, { useState, useEffect, useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/chipselector.module.css";
import SuggestList from "../search_elements/SuggestList";
import ClickTextBtn from "../buttons/ClickTextBtn";
import { upadteBlogTags } from "@/src/app/utils/blogsAction";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function ChipSelector(props) {
  const {
    allList = [],
    filedName,
    placeholder,
    size = "medium",
    apiTags,
    slug,
  } = props;
  const { setpageLoading } = useContext(AppContext);
  const [newValue, setnewValue] = useState("");
  const [fillterList, setfillterList] = useState([]);
  const [list, setlist] = useState("");
  const [tags, setTags] = useState([]);

  useEffect(() => {
    if (apiTags && apiTags.length > 0) {
      const initialTags = apiTags.map((tag) => tag.tagName);
      setTags(initialTags);
    }
  }, [apiTags]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setnewValue(value);

    if (value.length >= 3) {
      const filtered = allList.filter((tag) =>
        tag[filedName].toLowerCase().includes(value.toLowerCase())
      );
      setfillterList(filtered);
    } else {
      setfillterList([]);
    }
  };

  const handleTagClick = (text, slug) => {
    if (!tags.includes(text)) {
      setTags([...tags, text]); // Add to the tags array if it's not already present
    }
    setnewValue(""); // Clear the input field
    setfillterList([]); // Clear the filtered dropdown
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && newValue.trim()) {
      event.preventDefault();
      if (!tags.includes(newValue.trim())) {
        setTags([...tags, newValue.trim()]);
      }
      setnewValue("");
      setfillterList([]);
    }
  };

  const removeTag = (tagToRemove) => {
    console.log(tagToRemove);
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleSubmit = async () => {
    try {
      setpageLoading(true);
      const formData = { tagName: tags };
      const res = await upadteBlogTags(formData, slug);
      if (res.data.status === "success") {
        toast.success(res.data.message);
        setpageLoading(false);
      }
    } catch (err) {
      setSuccess(null);
      toast.error("somthing went wrong");
      setpageLoading(false);
    }
  };

  return (
    <div className={styles.main_conatiner}>
      <Toaster
        toastOptions={{
          className: "medium__text ",
        }}
      />
      <div className={`${styles.container} ${styles[size]} `}>
        <div className={styles.tagContainer}>
          {tags.map((tag, index) => (
            <div key={index} className={styles.chip}>
              {tag}
              <span
                className={styles.removeChip}
                onClick={() => removeTag(tag)}
              >
                &times;
              </span>
            </div>
          ))}
          <div className={styles.input_wrapper}>
            <input
              type="text"
              value={newValue}
              placeholder={placeholder}
              className={styles.input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      </div>

      {fillterList.length > 0 && (
        <SuggestList
          filterData={fillterList}
          filedName={filedName}
          itemClickhandel={handleTagClick}
        />
      )}

      <div className={styles.btn_wrapper}>
        <ClickTextBtn
          btnText="Update Tags"
          btnType="link_typeBtn"
          size="small_link"
          clickHandel={handleSubmit}
        />
      </div>
    </div>
  );
}
