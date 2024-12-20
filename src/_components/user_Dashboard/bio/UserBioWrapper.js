"use client";
import React, { useState, useContext } from "react";
import styles from "./css/userbioWrapper.module.css";
import toast, { Toaster } from "react-hot-toast";
import ReactQuillElement from "../../elements/formelements/ReactQuillElement";
import { AuthContext } from "@/src/_contextApi/authContext";
import { updateUserDetail } from "@/src/app/utils/userAuthaction";
import ClickTextBtn from "../../buttons/ClickTextBtn";

export default function UserBioWrapper() {
  const [btnToggle, setbtnToggle] = useState(false);
  const { authUser, handelUpdateUserProfile } = useContext(AuthContext);
  const [bioContent, setbioContent] = useState(authUser.bio);
  const handleQuillChange = (content) => {
    console.log(content);
    setbioContent(content);
  };

  const handelToggle = () => {
    setbtnToggle(!btnToggle);
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
          {btnToggle && (
            <ClickTextBtn
              btnText="Update"
              size="small"
              clickHandel={handelSubmitBio}
            />
          )}
        </div>
        <div>
          {btnToggle ? (
            <div>
              {" "}
              <ClickTextBtn
                btnText="Save"
                size="small"
                clickHandel={handelToggle}
              />{" "}
            </div>
          ) : (
            <div>
              {" "}
              <ClickTextBtn
                btnText="Edit"
                size="small"
                clickHandel={handelToggle}
              />{" "}
            </div>
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
          <div className={styles.content_text}>
            <p
              dangerouslySetInnerHTML={{
                __html: authUser.bio || "",
              }}
            ></p>
          </div>
        )}
      </div>
    </div>
  );
}
