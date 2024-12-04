import React from "react";
import styles from "./css/useravatar.module.css";
import userAvtar from "../../../public/web-static-img/user-avatar-img.png";
import CircleImg from "./CircleImg";
import TextElements from "../elements/textElements/TextElements";
export default function UserDetailsAvatar(props) {
  const { boldText, lightText, avtar_wrapper } = props;
  return (
    <div className={styles.user_inLine_avatar}>
      <div className={styles.user_img_wrapper}>
        <CircleImg imgSrc={userAvtar} avtar_wrapperStyle={avtar_wrapper} />
      </div>
      <div className={styles.maincard_user_deatils}>
        <TextElements
          text={boldText}
          textStyle="small_text semi_bold_text text_color_black"
        />
        <TextElements text={lightText} textStyle="tiny_text text_color_gray" />
      </div>
    </div>
  );
}
