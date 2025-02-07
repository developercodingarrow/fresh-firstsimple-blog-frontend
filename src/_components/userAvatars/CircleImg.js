import React from "react";
import styles from "./css/useravatar.module.css";
import Image from "next/image";
import defultImg from "../../../public/usersProfileImg/user-avatar-img.png";
export default function CircleImg(props) {
  const { imgSrc, avtar_wrapperStyle } = props;
  const imageUrl =
    imgSrc?.url && imgSrc.url.startsWith("http") ? imgSrc.url : defultImg;
  return (
    <div className={styles[avtar_wrapperStyle]}>
      {imgSrc?.url ? (
        <Image
          src={imageUrl}
          alt="LitVerseHub-user-image"
          width={100}
          height={100}
          className="circle_img_style"
        />
      ) : (
        <Image
          src={defultImg}
          alt="LitVerseHub-user-image"
          width={100}
          height={100}
          className="circle_img_style"
        />
      )}
    </div>
  );
}
