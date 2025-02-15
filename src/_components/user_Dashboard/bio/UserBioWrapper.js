"use client";
import React, { useState, useContext } from "react";
import styles from "./css/userbioWrapper.module.css";
import { useParams, useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import ReactQuillElement from "../../elements/formelements/ReactQuillElement";
import { AuthContext } from "@/src/_contextApi/authContext";
import ClickTextBtn from "../../buttons/ClickTextBtn";
import { AppContext } from "@/src/_contextApi/AppContext";
import { updateUserDetail } from "@/src/app/utils/userActions";

export default function UserBioWrapper() {
  const router = useRouter();
  const [btnToggle, setbtnToggle] = useState(false);
  const { authUser, handelUpdateUserProfile } = useContext(AuthContext);
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);
  const [bioContent, setbioContent] = useState(authUser.bio);
  const handleQuillChange = (content) => {
    console.log(content);
    setbioContent(content);
  };

  const handelToggle = () => {
    setbtnToggle(!btnToggle);
  };

  const handelSubmitBio = async () => {
    setisBtnLoadin(true);
    try {
      const obj = {
        bio: bioContent,
        _id: authUser._id,
      };
      const res = await handelUpdateUserProfile(obj);

      if (res.error) {
        toast.error(res.error);
        setisBtnLoadin(false);
        return;
      }
      if (res.data.status === "success") {
        updateUserDetail(res.data.result);
        toast.success(res.data.message);
        setisBtnLoadin(false);
        router.refresh();
        setTimeout(() => {
          setbtnToggle(false);
        }, 1000);
      }
    } catch (error) {
      toast.error("somthing went wrong");
      setisBtnLoadin(false);
    }
  };

  return (
    <div className={styles.main_container}>
      <Toaster
        toastOptions={{
          className: "medium__text ",
        }}
      />
      <div className={styles.Btnbar}>
        <div>
          {btnToggle && (
            <ClickTextBtn
              btnText="Update"
              size="small"
              btnLoading={isBtnLoadin}
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
                __html: authUser.bio || bioContent,
              }}
            ></p>
          </div>
        )}
      </div>
    </div>
  );
}
