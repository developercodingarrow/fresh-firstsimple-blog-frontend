import React from "react";
import styles from "../page.module.css";
import { MdKeyboardArrowRight } from "../../../_components/ApplicationIcons";

export const metadata = {
  title: "LitVerseHub | Privacy Policy",
  description:
    "LitVerseHub – Your digital hub for writers and readers. Explore our Privacy Policy to learn how we collect, use, and safeguard your personal information to provide a secure and trustworthy experience.",
};

export default function PrivacyPolicypage() {
  return (
    <div className={styles.main_container}>
      <div
        className={`${styles.page_breadcrumb} small_text text_color_gray capitalize_text mg_botom_lg`}
      >
        <span>Home</span>
        <span className={styles.arrow_iconBox}>
          {" "}
          <MdKeyboardArrowRight />{" "}
        </span>
        <span>Privacy Policy</span>
      </div>
      <div className={`${styles.page_header} mg_botom_lg`}>
        <h1>Privacy Policy</h1>
      </div>
      <section className={`${styles.page_metaDescreption} mg_botom_lg`}>
        <h2>
          At LitVerseHub, we are committed to protecting your privacy and
          ensuring the security of your personal information. This Privacy
          Policy outlines how we collect, use, share, and protect the
          information you provide when using our platform. By accessing or using
          LitVerseHub, you agree to the terms outlined in this policy.
        </h2>
      </section>
      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        <h3 className="mg_botom_lg">1. Information We Collect</h3>
        <p className="mg_botom_sm">
          {" "}
          We collect information to provide you with a seamless experience on
          our platform. This includes
        </p>
        <p className="mg_botom_sm">
          <strong>Personal Information: </strong> Name, email address, username,
          and other details you provide during registration or profile creation.
        </p>

        <p className="mg_botom_sm">
          <strong>Content Informatio: </strong> Blogs, comments, images, and
          other content you create or share on LitVerseHub.
        </p>

        <p className="mg_botom_sm">
          <strong>Technical Information: </strong> IP address, browser type,
          device information, and usage data collected through cookies and
          analytics tools.
        </p>
      </section>

      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        <h3 className="mg_botom_lg">2. How We Use Your Information</h3>
        <p className="mg_botom_sm">
          {" "}
          We use the information we collect for the following purposes
        </p>
        <p className="mg_botom_sm">
          <ul>
            <li>
              To provide, maintain, and improve our platform and services.
            </li>
            <li>To personalize your experience and show relevant content.</li>
            <li>
              To communicate with you about updates, promotions, and support
              requests..
            </li>
            <li>
              To analyze usage trends and optimize our platform’s performance.
            </li>
            <li>
              To ensure compliance with our terms of service and legal
              obligations.
            </li>
          </ul>
        </p>
      </section>

      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        <h3 className="mg_botom_lg">3. Sharing Your Information</h3>
        <p className="mg_botom_sm">
          {" "}
          We respect your privacy and do not sell your personal information.
          However, we may share your information in the following circumstances:
        </p>
        <p className="mg_botom_sm">
          <ul>
            <li>
              With Your Consent: When you explicitly allow us to share your
              information.
            </li>
            <li>
              With Service Providers: Third-party vendors who assist us in
              operating our platform (e.g., hosting, analytics, payment
              processing).
            </li>
            <li>
              For Legal Reasons: To comply with legal obligations, enforce our
              policies, or protect our rights and the rights of others.
            </li>
            <li>
              Aggregated Data: We may share anonymized or aggregated data that
              does not identify individual users.
            </li>
          </ul>
        </p>
      </section>
    </div>
  );
}
