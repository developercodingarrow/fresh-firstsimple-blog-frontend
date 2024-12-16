"use client";
import React, { useState, useContext } from "react";
import styles from "./css/userbioWrapper.module.css";
import toast, { Toaster } from "react-hot-toast";
import ReactQuillElement from "../../elements/formelements/ReactQuillElement";
import { AuthContext } from "@/src/_contextApi/authContext";
import { updateUserDetail } from "@/src/app/utils/userAuthaction";

export default function UserBioWrapper() {
  const [btnToggle, setbtnToggle] = useState(false);
  const { authUser, handelUpdateUserProfile } = useContext(AuthContext);
  const [bioContent, setbioContent] = useState(authUser.bio);
  const handleQuillChange = (content) => {
    console.log(content);
    setbioContent(content);
  };

  const handelToggle = () => {
    setbtnToggle(true);
  };

  const handelSubmitBio = async () => {
    console.log("handelSubmitBio");
    try {
      const obj = {
        bio: bioContent,
        _id: authUser._id,
      };
      const res = await handelUpdateUserProfile(obj);
      if (res.data.status === "success") {
        updateUserDetail(res.data.result);
        toast.success(res.data.message);
        console.log(res);
        setbtnToggle(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.main_container}>
      <Toaster />{" "}
      <div className={styles.Btnbar}>
        <div>
          {btnToggle ? (
            <div onClick={handelSubmitBio}> save</div>
          ) : (
            <div onClick={handelToggle}> Edit</div>
          )}
        </div>
      </div>
      <div className={styles.bio_eitor_wrapper}>
        {btnToggle ? (
          <div>
            <ReactQuillElement
              inputValue={bioContent}
              inputChnageHandler={handleQuillChange}
            />
          </div>
        ) : (
          <div>
            <p
              dangerouslySetInnerHTML={{
                __html: authUser.bio || "",
              }}
              className={styles.content}
            ></p>
          </div>
        )}
      </div>
    </div>
  );
}
