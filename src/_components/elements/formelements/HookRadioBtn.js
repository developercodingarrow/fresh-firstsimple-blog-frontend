import React, { forwardRef } from "react";
import styles from "./css/radiobtn.module.css";

const HookRadioBtn = forwardRef((props, ref) => {
  const { selectedOption, onChange, radioOptions, inputLabel } = props;

  const handleRadioChange = (option) => {
    onChange(option); // This updates React Hook Form
  };

  return (
    <div className={styles.radio_container}>
      <div className={styles.radio_title}>{inputLabel}</div>
      <div className={styles.radioOptionBox}>
        {radioOptions.map((option, index) => (
          <div
            className={`${styles.radioOption} ${
              selectedOption === option ? styles.selected : ""
            }`}
            key={index}
            onClick={() => handleRadioChange(option)}
          >
            <div className={styles.outerCircle}>
              {selectedOption === option && (
                <div className={styles.innerDot}></div>
              )}
            </div>
            <div className={styles.radio_btn_textGap}>
              <label className="small_text">{option}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default HookRadioBtn;
