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
      hrfLink: "/",
    },
    {
      text: "Faqs",
      hrfLink: "/",
    },
    {
      text: "Contact support",
      hrfLink: "/",
    },
    {
      text: "Privacy policy",
      hrfLink: "/",
    },
    {
      text: "Terms",
      hrfLink: "/",
    },
  ];

  return (
    <div className={styles.dekstop_footer_container}>
      <div className={styles.footer_heding}>
        <h2>Medium</h2>
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
