"use client";
import React, { useContext, useState, useEffect, useRef } from "react";
import styles from "./css/actiondot.module.css";
import { BsThreeDotsVertical } from "../ApplicationIcons";
import { AuthContext } from "@/src/_contextApi/authContext";
import { ModelsContext } from "@/src/_contextApi/ModelContextApi";
import ThreeDotActionDropDown from "./ThreeDotActionDropDown";

export default function ActionDot(props) {
  const {
    actionList,
    actionId,
    slug,
    top = "20px",
    left = "10px",
    right,
  } = props;
  const { authUser } = useContext(AuthContext);
  const { handelOpenAuthModel } = useContext(ModelsContext);
  const [isOpen, setisOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dropdownStyle = {
    top,
    left: right ? "auto" : left, // If 'right' is provided, set 'left' to 'auto'
    right, // This will be undefined if not provided, which is fine
  };

  const handelOpen = () => {
    setisOpen(true);
  };

  const handelClose = () => {
    setisOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        handelClose(); // Close the dropdown if clicked outside
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className={styles.com_component}>
      {authUser ? (
        <div onClick={handelOpen}>
          <BsThreeDotsVertical />{" "}
        </div>
      ) : (
        <div onClick={handelOpenAuthModel}>
          <BsThreeDotsVertical />{" "}
        </div>
      )}

      {isOpen && (
        <div className={styles.action_dropDown_wrapper} style={dropdownStyle}>
          <ThreeDotActionDropDown
            actionList={actionList}
            actionId={actionId}
            slug={slug}
            closeHandel={handelClose}
          />
        </div>
      )}
    </div>
  );
}
