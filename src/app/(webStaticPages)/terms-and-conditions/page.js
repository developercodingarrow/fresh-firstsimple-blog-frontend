import React from "react";
import styles from "../page.module.css";
import { MdKeyboardArrowRight } from "../../../_components/ApplicationIcons";
export default function TermsAndConditionsPage() {
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
        <span>Terms and Conditions </span>
      </div>
      <div className={`${styles.page_header} mg_botom_lg`}>
        <h1>Terms and Conditions for LitVerseHub</h1>
      </div>
      <section className={`${styles.page_metaDescreption} mg_botom_lg`}>
        <h2>
          Welcome to LitVerseHub! By using our platform, you agree to the
          following terms and conditions. Please read them carefully before
          creating an account and posting content.
        </h2>
      </section>
      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        <h3 className="mg_botom_lg">1. Account Registration</h3>
        <p className="mg_botom_sm">
          1.1 Users must provide accurate and complete information during the
          registration process. 1.2 Users are responsible for maintaining the
          security of their account and password. 1.3 Any unauthorized use of an
          account must be reported immediately.
        </p>
      </section>

      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        <h3 className="mg_botom_lg">2. Content Guidelines</h3>
        <p className="mg_botom_sm">
          2.1 Users may create content in various categories and topics. 2.2
          Users must ensure that their content complies with legal and ethical
          standards. 2.3 The following types of content are strictly prohibited:
        </p>
        <p className="mg_botom_sm">
          <ul>
            <li>Sexual harassment, offensive, or explicit content.</li>
            <li>Hate speech, threats, or content that promotes violence.</li>
            <li>Content that violates any laws or regulations.</li>
            <li>
              Spam, misleading, or deceptive content. 2.4 Users must not upload
              or use offensive images in their blogs or profile. 2.5 Users must
              not plagiarize or infringe on the intellectual property rights of
              others.
            </li>
          </ul>
        </p>
      </section>

      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        <h3 className="mg_botom_lg">3. Commenting Guidelines</h3>
        <p className="mg_botom_sm">
          3.1 Users must engage respectfully in discussions and comments. 3.2
          Comments containing sexual harassment, offensive language, hate
          speech, or illegal content are prohibited. 3.3 Users who violate these
          rules may have their comments removed and face penalties, including
          account suspension.
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

      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        <h3 className="mg_botom_lg">4. Reporting and Moderation</h3>
        <p className="mg_botom_sm">
          4.1 Users can report any content that violates these terms. 4.2 Our
          moderation team will review reported content and take necessary
          actions if a violation is confirmed. 4.3 Actions may include content
          removal, account suspension, or banning the user from the platform.
        </p>
      </section>

      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        <h3 className="mg_botom_lg">
          5. Prohibition of Spam and Fraudulent Activities
        </h3>
        <p className="mg_botom_sm">
          5.1 Users must not engage in spam, including but not limited to
          excessive self-promotion, fake engagement, or misleading content. 5.2
          Users must not create multiple fake accounts to manipulate the
          platform. 5.3 Any violation may result in content removal or account
          suspension.
        </p>
      </section>

      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        <h3 className="mg_botom_lg">6. Advertising and Monetization</h3>
        <p className="mg_botom_sm">
          6.1 Users may be allowed to post advertisements, but they must comply
          with our advertising policies. 6.2 Any misleading, fraudulent, or
          unauthorized advertisements will be removed, and the user may face
          penalties.
        </p>
      </section>
      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        <h3 className="mg_botom_lg">7. Account Suspension and Termination</h3>
        <p className="mg_botom_sm">
          7.1 We reserve the right to suspend or terminate an account that
          violates our terms. 7.2 Users whose accounts are suspended may appeal
          the decision through our support team. 7.3 In severe cases, accounts
          may be permanently banned without prior notice.
        </p>
      </section>

      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        <h3 className="mg_botom_lg">8. Liability and Disclaimer</h3>
        <p className="mg_botom_sm">
          8.1 We do not take responsibility for user-generated content but will
          take appropriate action when necessary
        </p>
        <p className="mg_botom_sm">
          8.2 Users are solely responsible for their content and any
          consequences arising from it. 8.3 We do not guarantee uninterrupted
          access to the platform and may update or modify features without
          notice.
        </p>
      </section>

      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        <h3 className="mg_botom_lg">9. Changes to Terms and Conditions</h3>
        <p className="mg_botom_sm">
          9.1 We reserve the right to modify these terms at any time. 9.2 Users
          will be notified of significant changes, and continued use of the
          platform implies acceptance of the revised terms.
        </p>
      </section>

      <section className={`${styles.page_content} medium__text mg_botom_lg`}>
        <h3 className="mg_botom_lg">10. Contact Information</h3>
        <p className="mg_botom_sm">
          For any questions or concerns regarding these terms, please contact us
          at support@LitVerseHub.com. By using LitVerseHub, you agree to abide
          by these Terms and Conditions. Violation of these terms may result in
          content removal, suspension, or termination of your account.
        </p>
      </section>
    </div>
  );
}
