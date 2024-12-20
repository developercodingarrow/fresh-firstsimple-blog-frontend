import React from "react";
import styles from "../../../../../_components/Skeleton/css/Skeleton.module.css";
import SkeletonUserDetails from "@/src/_components/Skeleton/SkeletonUserDetails";
import SkeletonThreeDote from "@/src/_components/Skeleton/SkeletonThreeDote";
import SkeletonTitle from "@/src/_components/Skeleton/SkeletonTitle";
import SkeletonMeta from "@/src/_components/Skeleton/SkeletonMeta";
import SkeletonCardImg from "@/src/_components/Skeleton/SkeletonCardImg";
export default function Loading() {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el, index) => {
        return (
          <div className={styles.card_main_container} key={index}>
            <div className={styles.card_body}>
              <div className={styles.body_inner_container}>
                <div className={styles.deatils_box}>
                  <SkeletonTitle />
                </div>
              </div>
            </div>
            <div className={styles.card_footer}>
              <span className={styles.footer_action}></span>
              <span className={styles.footer_action}></span>
              <span className={styles.footer_action}></span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
