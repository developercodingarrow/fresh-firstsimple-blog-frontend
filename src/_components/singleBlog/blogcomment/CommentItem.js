import React from "react";
import styles from "./blogcomments.module.css";
import CircleImg from "../../userAvatars/CircleImg";
import userAvtar from "../../../../public/web-static-img/user-avatar-img.png";
import TextElements from "../../elements/textElements/TextElements";
import { BsThreeDotsVertical } from "../../ApplicationIcons";
import RepliesList from "./RepliesList";
import ClickTextBtn from "../../buttons/ClickTextBtn";
export default function CommentItem() {
  return (
    <div className={styles.comment_profile}>
      <div className={styles.comment_user_avtar_wrapper}>
        <CircleImg
          imgSrc={userAvtar}
          avtar_wrapperStyle="maincard_avtar_wrapper"
        />
      </div>
      <div className={styles.comment_content}>
        <TextElements
          text="Sanjay"
          textStyle="small_text semi_bold_text text_color_black"
        />
        <div className="small_text text_color_gray">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut bibendum,
          neque et ornare congue, lorem nibh consequat velit, vitae blandit urna
          magna sit amet nulla. Quisque a rhoncus elit.
        </div>
        <div className={styles.reply_list_wrapper}>
          {[1, 2, 3].map((el, index) => {
            return <RepliesList />;
          })}

          <div className={styles.reply_btn_form_wrapper}>
            <ClickTextBtn
              btnText="Reply"
              size="small_link"
              btnType="link_typeBtn"
            />
          </div>
        </div>
      </div>
      <div>
        <BsThreeDotsVertical />
      </div>
    </div>
  );
}
