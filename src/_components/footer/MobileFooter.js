"use client";
import React, { useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter, usePathname } from "next/navigation";
import { GoHomeFill } from "react-icons/go";
import { BiSolidPurchaseTagAlt } from "react-icons/bi";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import styles from "./css/mainfooter.module.css";
import Link from "next/link";
import FooterAutn from "./FooterAutn";
import { createBlogFirstAction } from "@/src/app/utils/blogsAction";
import { AppContext } from "@/src/_contextApi/AppContext";
import { AuthContext } from "@/src/_contextApi/authContext";

export default function MobileFooter(props) {
  const { authUser } = useContext(AuthContext);
  const { userData } = props;
  const { setpageLoading } = useContext(AppContext);
  const router = useRouter();
  const pathname = usePathname(); // Track current pathname

  useEffect(() => {
    // When pathname changes, stop loading
    setpageLoading(false);
  }, [pathname]);

  const handelCreateBlogAction = async () => {
    try {
      setpageLoading(true);
      const res = await createBlogFirstAction();
      if (res.error) {
        toast.error(res.error);
        setpageLoading(false);
        return;
      }

      if (res.data.status === "success") {
        router.push(`/content/${res.data.result._id}`, undefined, {
          shallow: true,
        });

        setpageLoading(false);
      }
    } catch (error) {
      console.log(error);
      setpageLoading(false);
    }
  };

  return (
    <div className={styles.mobile_footer_container}>
      <Link href={"/"} className={styles.footer_item}>
        <GoHomeFill className={styles.icon} />
        <span>Home</span>
      </Link>
      <Link href={"blog-topics"} className={styles.footer_item}>
        <BiSolidPurchaseTagAlt className={styles.icon} />
        <span>Tags</span>
      </Link>
      {authUser && (
        <div className={styles.footer_item} onClick={handelCreateBlogAction}>
          <CiCirclePlus className={styles.icon} />
          <span>Create</span>
        </div>
      )}

      <FooterAutn authData={userData} />
    </div>
  );
}
