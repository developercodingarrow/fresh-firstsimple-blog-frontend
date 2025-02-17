import React from "react";
import styles from "./css/mainfooter.module.css";
import Link from "next/link";
export default function DekstopFooter() {
  const footerLinks = [
    {
      text: "home",
      hrfLink: "/",
    },
    {
      text: "About us",
      hrfLink: "about-us",
    },
    {
      text: "Contact support",
      hrfLink: "contact-us",
    },
    {
      text: "Privacy policy",
      hrfLink: "privacy-policy",
    },
    {
      text: "Terms",
      hrfLink: "terms-and-conditions",
    },
  ];

  return (
    <div className={styles.dekstop_footer_container}>
      <div className={styles.footer_heding}>
        <h2>LitVerseHub</h2>
      </div>
      <div className={styles.footer_bottom_bar}>
        <div className={styles.footer_page_links_wrapper}>
          {footerLinks.map((el, index) => {
            return (
              <Link href={el.hrfLink} className={styles.link_style}>
                {el.text}
              </Link>
            );
          })}
        </div>
        <div className="tiny_text text_color_gray">@ Medium 2024</div>
      </div>
    </div>
  );
}
