import React from "react";
import styles from "./css/UserTextDetail.module.css";
import { MdKeyboardArrowRight } from "../../ApplicationIcons";

export default function UserTextDetail(props) {
  const {
    lableText,
    valueText,
    openModal,
    modelHeading,
    apiData,
    modelInputs,
    modelActionHandler,
  } = props;

  const handleOpen = () => {
    openModal(
      modelHeading,
      apiData,
      apiData._id,
      modelInputs,
      modelActionHandler
    );
  };
  return (
    <div className={styles.main_container}>
      <div className={styles.inner_container}>
        <div className={`${styles.lable_text} medium__text `}>{lableText}</div>
        <div
          className={`${styles.value_text} medium__text`}
          onClick={handleOpen}
        >
          {valueText}
          <span className="icon_box">
            <MdKeyboardArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
}
