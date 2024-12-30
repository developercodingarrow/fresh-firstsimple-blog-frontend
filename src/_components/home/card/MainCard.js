import React from "react";
import styles from "./css/maincard.module.css";
import Link from "next/link";
import UserDetailsAvatar from "../../userAvatars/UserDetailsAvatar";
import Image from "next/image";
import MainCardActionDotWrapper from "../../actiondote/MainCardActionDotWrapper";
import MainCardFooter from "./MainCardFooter";

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
            userImage={data?.user?.userImg}
            imgDirectoryPath="/usersProfileImg"
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
      <MainCardFooter data={data} />
    </div>
  );
}
