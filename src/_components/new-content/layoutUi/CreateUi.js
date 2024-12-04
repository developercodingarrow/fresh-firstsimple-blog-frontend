"use client";
import React, { useContext, useState, useEffect } from "react";
import styles from "./css/createui.module.css";
import ClickTextBtn from "../../buttons/ClickTextBtn";
import SimpleInput from "../../elements/formelements/SimpleInput";
import SimpleTextArea from "../../elements/formelements/SimpleTextArea";
import ReactQuillElement from "../../elements/formelements/ReactQuillElement";
import SingleImgUplod from "../../imgUplod/SingleImgUplod";
import ChipSelector from "../../chips/ChipSelector";
import SingleImgModel from "../../models/SingleImgModel";

export default function CreateUi(props) {
  const { apiData, slug } = props;

  const [blogData, setBlogData] = useState({
    blogTitle: apiData?.blogTitle || "",
    metaDescription: apiData?.metaDescription || "",
    blogDescreption: apiData?.blogDescreption || "",
  });

  const [errors, setErrors] = useState({
    blogTitle: "",
    metaDescription: "",
    blogDescreption: "",
  });
  const [formIsValid, setFormIsValid] = useState(true); // Default to true

  const validateForm = () => {
    const isTitleValid = blogData.blogTitle.length >= 10;
    const isMetaDescriptionValid =
      blogData.metaDescription.length >= 100 &&
      blogData.metaDescription.length <= 160;
    const isBlogDescriptionValid = blogData.blogDescreption.length >= 50; // Fix condition

    // Validation is false if any check fails
    setFormIsValid(
      !(isTitleValid && isMetaDescriptionValid && isBlogDescriptionValid)
    );
  };

  useEffect(() => {
    validateForm();
  }, [blogData, blogData.blogDescreption, errors]);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Validation for title
    if (name === "blogTitle") {
      if (value.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          blogTitle: "Title cannot be empty.",
        }));
      } else if (value.length < 10 || value.length > 100) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          blogTitle: "Title must be at least 10 characters long.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, blogTitle: "" }));
      }
    }
    // Validation for metaDescription
    if (name === "metaDescription") {
      if (value.trim() === "") {
        setErrors((prevErrors) => ({
          ...prevErrors,
          metaDescription: "Meta description cannot be empty.",
        }));
      } else if (value.length < 100 || value.length > 160) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          metaDescription:
            "Meta description must be between 100 and 160 characters.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, metaDescription: "" }));
      }
    }
  };

  const handleQuillChange = (content) => {
    setBlogData((prevData) => ({
      ...prevData,
      blogDescreption: content,
    }));

    if (content.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        blogDescreption: "Content cannot be empty.",
      }));
    } else if (content.length < 50) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        blogDescreption: "Content must be at least 50 characters long.",
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        blogDescreption: "",
      }));
    }
  };

  const allTags = [
    {
      tagName: "java Script",
      slug: "javaScript",
    },

    {
      tagName: "Real Estate",
      slug: "real-estate",
    },
    {
      tagName: "Digital Marketing",
      slug: "digital-marketing",
    },
    {
      tagName: "Property",
      slug: "property",
    },

    {
      tagName: "loan",
      slug: "loan",
    },
  ];

  const allCategories = [
    {
      categoriesName: "News",
      slug: "news",
    },
    {
      categoriesName: "Movies",
      slug: "movies",
    },

    {
      categoriesName: "Sports",
      slug: "sports",
    },

    {
      categoriesName: "ipl",
      slug: "ipl",
    },
  ];

  const handelUpdateContent = async () => {
    alert("published");
  };
  return (
    <div className={styles.main_container}>
      <SingleImgModel />
      <div className={styles.section_header}>
        <ClickTextBtn
          btnText="Publish"
          size="medium"
          disabledBtn={false}
          btnLoading={false}
          clickHandel={handelUpdateContent}
        />
      </div>
      <section className={styles.top_section}>
        <div className={styles.section_left}>
          <div className={"section_heading mg_botom_lg"}>General</div>
          <div className={styles.form_elements_wrapper}>
            <div className={styles.form_element_Box}>
              <div className={styles.input_lable}>
                <label>Blog Title</label>
              </div>
              <div className={styles.input_wrapper}>
                <SimpleInput
                  inputPlaceholder="Enter Blog Title"
                  inputValue={blogData.blogTitle}
                  inputName="blogTitle"
                  inputChnageHandler={handelChange}
                />
              </div>
              <span className={styles.error_msg}>{errors.blogTitle}</span>
            </div>
            <div className={styles.form_element_Box}>
              <div className={styles.input_lable}>
                <label>Meta Descreption</label>
              </div>
              <div className={styles.input_wrapper}>
                <SimpleTextArea
                  inputPlaceholder="Enter Blog Meta Descreption"
                  inputValue={blogData.metaDescription}
                  inputName="metaDescription"
                  inputChnageHandler={handelChange}
                />
              </div>
              <span className={styles.error_msg}>{errors.metaDescription}</span>
            </div>
            <div className={styles.form_element_Box}>
              <ReactQuillElement
                inputValue={blogData.blogDescreption}
                inputChnageHandler={handleQuillChange}
              />
            </div>
            <span className={styles.error_msg}>{errors.blogDescreption}</span>
          </div>
        </div>
        <div className={styles.section_right}>
          <div className={styles.componenet_section}>
            <div className={"section_heading mg_botom_lg"}>Thumblin</div>
            <div className={styles.section_component_wrapper}>
              <SingleImgUplod />
            </div>
          </div>

          <div className={styles.componenet_section}>
            <div className={"section_heading mg_botom_lg"}>Tags</div>
            <div className={styles.section_component_wrapper}>
              <ChipSelector
                allList={allTags}
                filedName="tagName"
                placeholder="Enter your tag"
              />
            </div>
          </div>

          <div className={styles.componenet_section}>
            <div className={"section_heading mg_botom_lg"}>Categories</div>
            <div className={styles.section_component_wrapper}>
              <ChipSelector
                allList={allCategories}
                filedName="categoriesName"
                placeholder="Type Categories name"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
