import React from "react";
import styles from "./css/maincard.module.css";
import Link from "next/link";
import UserDetailsAvatar from "../../userAvatars/UserDetailsAvatar";
import { FaHeart, IoEyeOutline, FaComment } from "../../ApplicationIcons";
import cardimg from "../../../../public/web-static-img/cardimg.png";
import Image from "next/image";
import MainCardActionDotWrapper from "../../actiondote/MainCardActionDotWrapper";

export default function MainCard() {
  return (
    <div className={styles.card_main_container}>
      <div className={styles.card_header}>
        <div>
          <UserDetailsAvatar
            boldText="sanjay"
            lightText="24-aug-2024"
            avtar_wrapper="maincard_avtar_wrapper"
          />
        </div>
        <div>
          <MainCardActionDotWrapper />
        </div>
      </div>
      <div className={styles.card_body}>
        <Link
          href={"/blog/lorem-ipsum-dolor-sit-ame-y"}
          className={styles.body_inner_container}
        >
          <div className={styles.deatils_box}>
            <div className={styles.card_title_box}>
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
            </div>
            <div className={styles.card_meta_details}>
              <h3 className={"text_color_gray"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse id nibh sit amet mi tempor ultrices quis at nisl.
                Nam enim dolor, pulvinar a lorem non, ali
              </h3>
            </div>
          </div>
          <div className={styles.card_img_wrapper}>
            <Image
              src={cardimg}
              width={500}
              height={500}
              className={styles.card_thumblin}
            />
          </div>
        </Link>
      </div>
      <div className={styles.card_footer}>
        <div className={styles.card_icon_details}>
          <div className={styles.icon_box}>
            <FaHeart />
          </div>
          <div className={styles.icon_details}>200</div>
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
          <div className={styles.icon_details}>30</div>
        </div>
      </div>
    </div>
  );
}
