import Link from "next/link";
import styles from "./customeerror.module.css";

export default function AlternativeNotFound(props) {
  const { msg } = props;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.message}>
        {msg ? msg : "The page you’re looking for doesn’t exist."}
      </p>
      <Link href="/" className={styles.link}>
        Go Back to Home
      </Link>
    </div>
  );
}
