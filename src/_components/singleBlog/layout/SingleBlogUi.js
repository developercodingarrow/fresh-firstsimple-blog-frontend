import React from "react";
import styles from "./css/singleblogui.module.css";
import dummyImg from "../../../../public/web-static-img/single-blog-thumblin.png";
import Image from "next/image";
import BlogComment from "../blogcomment/BlogComment";
import Blogbreadcrumb from "../../breadcrumbs/Blog/Blogbreadcrumb";
import SingleBlogActionBar from "../../actionbar/SingleBlogActionBar";
import MobileCommentModel from "../../models/MobileCommentModel";

export default function SingleBlogUi(props) {
  const { data } = props;

  return (
    <div className={styles.main_container}>
      <MobileCommentModel data={data} />
      <div className={styles.breadcrumb_wrapper}>
        <Blogbreadcrumb pageTitle={data?.blogTitle} />
      </div>
      <div className={styles.inner_container}>
        <div className={styles.content_container}>
          {data?.blogThumblin?.url && (
            <>
              <div className={styles.blog_thumblin_wrapper}>
                <Image
                  src={`/blogthumblin/${data.blogThumblin.url}`}
                  width={900}
                  height={900}
                  className={styles.img_style}
                />
              </div>
              <div
                className={`${styles.img_caption} text_color_gray tiny_text`}
              >
                {data?.blogThumblin?.caption}
              </div>
            </>
          )}

          <div className={styles.actionbar_wrapper}>
            <SingleBlogActionBar data={data} />
          </div>
          <div className={styles.content_title}>
            <h1>{data?.blogTitle}</h1>
          </div>
          <div className={styles.content_text}>
            {" "}
            <p
              dangerouslySetInnerHTML={{
                __html: data?.blogDescreption || "",
              }}
            ></p>
          </div>
        </div>
        <div className={styles.comment_container}>
          <BlogComment
            blogComments={data?.comments}
            blogId={data?._id}
            blogBy={data?.user}
          />
        </div>
      </div>
    </div>
  );
}
