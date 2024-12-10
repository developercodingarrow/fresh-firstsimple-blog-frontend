"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./css/tabbar.module.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "../ApplicationIcons";
import Link from "next/link";

export default function TabBar(props) {
  const { data, stickypos = 50 } = props;
  const [isSticky, setIsSticky] = useState(false);
  const wrapperRef = useRef(null); // Ref for the scrollable wrapper

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const stickyPosition = stickypos; // Change this value to control the sticky position
      setIsSticky(scrollTop > stickyPosition);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({
        left: -150, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollBy({
        left: 150, // Adjust the scroll distance as needed
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={`${styles.tab_container} ${isSticky ? styles.sticky : ""}`}>
      <div className={styles.arrow_box} onClick={scrollLeft}>
        <MdKeyboardArrowLeft />{" "}
      </div>
      <div className={styles.tab_links_wrapper} ref={wrapperRef}>
        {data.map((el, index) => {
          return (
            <Link
              href={el.hrflink}
              key={index}
              className={`${styles.tab_links} text_color_gray medium__text semi_bold_text`}
            >
              {el.text}
            </Link>
          );
        })}
      </div>
      <div className={styles.arrow_box} onClick={scrollRight}>
        <MdKeyboardArrowRight />
      </div>
    </div>
  );
}
