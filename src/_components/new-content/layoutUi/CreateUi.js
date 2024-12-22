"use client";
import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import styles from "./css/createui.module.css";
import ClickTextBtn from "../../buttons/ClickTextBtn";
import SimpleInput from "../../elements/formelements/SimpleInput";
import SimpleTextArea from "../../elements/formelements/SimpleTextArea";
import ReactQuillElement from "../../elements/formelements/ReactQuillElement";
import SingleImgUplod from "../../imgUplod/SingleImgUplod";
import ChipSelector from "../../chips/ChipSelector";
import SingleImgModel from "../../models/SingleImgModel";
import { updateBlogContent } from "@/src/app/utils/blogsAction";
import { handelUploadThumblin } from "@/src/app/imghandlers/imageHandlers";
import { TagContext } from "@/src/_contextApi/TagContextApi";
import { IoArrowBackSharp } from "../../ApplicationIcons";

export default function CreateUi(props) {
  const router = useRouter();
  const { apiData, slug } = props;
  const { trustedTags } = useContext(TagContext);

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

  const handelUpdateContent = async () => {
    try {
      const res = await updateBlogContent(blogData, slug);
      console.log(res);

      if (res.data.status === "success") {
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleBack = () => {
    if (window.history.length > 2) {
      router.back(); // Go to the previous page in history
    } else {
      router.push("/"); // Fallback to the home page if no history exists
    }
  };
  return (
    <div className={styles.main_container}>
      <Toaster />
      <SingleImgModel updateHandler={handelUploadThumblin} id={slug} />
      <div className={styles.section_header}>
        <div onClick={handleBack} className={styles.backBtn_box}>
          <IoArrowBackSharp />
        </div>
        <div>
          <ClickTextBtn
            btnText="Publish"
            size="medium_fill"
            disabledBtn={false}
            btnLoading={false}
            clickHandel={handelUpdateContent}
          />
        </div>
      </div>
      <div className="create_blog_children_wrapper">
        <section className={styles.top_section}>
          <div className={styles.section_left}>
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
                    inputSize="medium"
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
                <span className={styles.error_msg}>
                  {errors.metaDescription}
                </span>
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
                <SingleImgUplod apiImg={apiData} imageFor="blogThumblin" />
              </div>
            </div>

            <div className={styles.componenet_section}>
              <div className={"section_heading mg_botom_lg"}>Tags</div>
              <div className={styles.section_component_wrapper}>
                <ChipSelector
                  allList={trustedTags}
                  filedName="tagName"
                  placeholder="Enter your tag"
                  apiTags={apiData?.blogTags}
                  slug={slug}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
