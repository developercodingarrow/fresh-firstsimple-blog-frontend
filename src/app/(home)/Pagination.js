"use client"; // Client-side rendering for this component
import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import styles from "./page.module.css"; // Assuming you use CSS modules
import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "../../_components/ApplicationIcons";

const Pagination = ({ totalPages, tag }) => {
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;
  if (totalPages <= 1) return null; // No need to show pagination for a single page

  return (
    <div className={styles.pagination}>
      {/* Previous Button */}
      {currentPage > 1 && (
        <Link href={`?page=${currentPage - 1}${tag ? `&tag=${tag}` : ""}`}>
          <button className={`${styles.pageButton} ${styles.prev}`}>
            <MdKeyboardArrowLeft />
          </button>
        </Link>
      )}
      <div className={styles.number_btns_wrapper}>
        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, index) => (
          <Link
            key={index}
            href={`?page=${index + 1}${tag ? `&tag=${tag}` : ""}`}
          >
            <button
              className={`${styles.pageButton} ${
                currentPage === index + 1 ? styles.active : ""
              }`}
            >
              {index + 1}
            </button>
          </Link>
        ))}
      </div>

      {/* Next Button */}
      {currentPage < totalPages && (
        <Link href={`?page=${currentPage + 1}${tag ? `&tag=${tag}` : ""}`}>
          <button className={`${styles.pageButton} ${styles.next}`}>
            <MdKeyboardArrowRight />
          </button>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
