"use client"; // Error boundaries must be Client Components

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error({ error, reset }) {
  const router = useRouter();
  useEffect(() => {}, [error]);

  const handelrefreshpage = () => {
    router.refresh();
  };

  return (
    <div className={"errorContainer"}>
      <h1 className={"error_title"}>Oops! Something went wrong</h1>
      <p className={"error_message"}>
        An unexpected error occurred. Please try again or contact support if the
        problem persists.
      </p>
      <button onClick={handelrefreshpage} className={"retryButton"}>
        Retry
      </button>
      <div>
        <Link href="/" className={"error_link"}>
          Go Back to Home
        </Link>
      </div>
    </div>
  );
}
