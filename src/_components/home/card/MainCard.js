import React from "react";
import styles from "./css/maincard.module.css";
import Link from "next/link";
import UserDetailsAvatar from "../../userAvatars/UserDetailsAvatar";
import { FaHeart, IoEyeOutline, FaComment } from "../../ApplicationIcons";
import cardimg from "../../../../public/web-static-img/cardimg.png";
import Image from "next/image";
import MainCardActionDotWrapper from "../../actiondote/MainCardActionDotWrapper";

export default function MainCard(props) {
  const { data } = props;

  const name = data.user?.name;

  return (
    <div className={styles.card_main_container}>
      <div className={styles.card_header}>
        <div>
          <UserDetailsAvatar
            boldText={name}
            dateText={data?.createdAt}
            avtar_wrapper="maincard_avtar_wrapper"
            pageLink={data.user.userName}
          />
        </div>
        <div>
          <MainCardActionDotWrapper />
        </div>
      </div>
      <div className={styles.card_body}>
        <Link
          href={`/blog/${data.slug}`}
          className={styles.body_inner_container}
        >
          <div className={styles.deatils_box}>
            <div className={styles.card_title}>
              <h2>{data.blogTitle}</h2>
            </div>
            <div className={styles.card_meta_details}>
              <h3 className={"text_color_gray"}>{data.metaDescription}</h3>
            </div>
          </div>
          <div className={styles.card_img_wrapper}>
            {data.blogThumblin.url ? (
              <Image
                src={`/blogthumblin/${data.blogThumblin.url}`}
                width={500}
                height={500}
                className={styles.card_thumblin}
              />
            ) : (
              <div className={styles.card_img_not_avilable}>
                {" "}
                No Image Avilable
              </div>
            )}
          </div>
        </Link>
      </div>
      <div className={styles.card_footer}>
        <div className={styles.card_icon_details}>
          <div className={styles.icon_box}>
            <FaHeart />
          </div>
          <div className={styles.icon_details}>{data?.likes?.length}</div>
        </div>
        <div className={styles.card_icon_details}>
          <div className={styles.icon_box}>
            {" "}
            <IoEyeOutline />{" "}
          </div>

          <div className={styles.icon_details}>1500</div>
        </div>
        <div className={styles.card_icon_details}>
          <div className={styles.icon_box}>
            <FaComment />
          </div>
          <div className={styles.icon_details}>{data?.comments?.length} </div>
        </div>
      </div>
    </div>
  );
}
