import React from "react";
import styles from "./css/useravatar.module.css";
import userAvtar from "../../../public/web-static-img/user-avatar-img.png";
import CircleImg from "./CircleImg";
import TextElements from "../elements/textElements/TextElements";
import { formatDate } from "@/src/_logicalFunctions/formatDate";
import Link from "next/link";
export default function UserDetailsAvatar(props) {
  const {
    boldText,
    lightText,
    dateText,
    avtar_wrapper,
    userImage,
    imgDirectoryPath,
    pageLink,
  } = props;

  const date = formatDate(dateText);
  return (
    <Link
      href={`/user-profile/${pageLink}`}
      className={styles.user_inLine_avatar}
    >
      <div className={styles.user_img_wrapper}>
        <CircleImg
          imgSrc={userImage}
          imgDirectoryPath={imgDirectoryPath}
          avtar_wrapperStyle={avtar_wrapper}
        />
      </div>
      <div className={styles.maincard_user_deatils}>
        <TextElements
          text={boldText}
          textStyle="small_text semi_bold_text text_color_black"
        />

        {dateText && (
          <TextElements text={date} textStyle="tiny_text text_color_gray" />
        )}
        {lightText && (
          <TextElements
            text={lightText}
            textStyle="tiny_text text_color_gray"
          />
        )}
      </div>
    </Link>
  );
}
