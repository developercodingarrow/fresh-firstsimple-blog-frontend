"use client";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import styles from "./contsctus.module.css";
import useCustomForm from "@/src/_custome-hooks/useCustomForm";
import { contactFormInputFileds } from "@/src/jsonData/formInputsData";
import SubmitBtn from "../buttons/SubmitBtn";
import { newContactEnquire } from "@/src/app/utils/contactAction";
import { AppContext } from "@/src/_contextApi/AppContext";

export default function ContactUsUi() {
  const router = useRouter();
  const {
    handleSubmit,
    formState,
    control,
    watch,
    setValue,
    renderInput,
    errors,
    isValid,
    reset,
  } = useCustomForm();
  const { isBtnLoadin, setisBtnLoadin } = useContext(AppContext);

  const handleForm = async (data) => {
    try {
      setisBtnLoadin(true);
      const res = await newContactEnquire(data);
      if (res.error) {
        toast.error(res.error);
        setisBtnLoadin(false);
        return;
      }
      if (res.data.status === "success") {
        toast.success(res.data.message);
        router.refresh();
        setisBtnLoadin(false);
        reset();
      }
    } catch (error) {
      toast.error("Oops! Something went wrong.");
      setisBtnLoadin(false);
    }
  };

  return (
    <div className={styles.main_container}>
      <Toaster
        toastOptions={{
          className: "medium__text ",
        }}
      />
      <section className={styles.hero_section}>
        <div className={styles.text_box}>
          <h1>Contact Us</h1>
          <h3>Get in touch with us for any inquiries, support, or feedback.</h3>
        </div>
      </section>

      <section className={styles.form_section}>
        <div className={styles.form_part}>
          <h2 className="mg_botom_lg">Get in Touch</h2>
          <div className={styles.form_container}>
            <div className={styles.form_wrapper}>
              <form onSubmit={handleSubmit(handleForm)}>
                <div className="mg_botom_lg">
                  {contactFormInputFileds.map((input, index) => {
                    return (
                      <div key={index} className={styles.form_fileds}>
                        {renderInput(input)}
                        <div className="mg_top_sm">
                          {errors[input.name] && (
                            <span className={"input_errors"}>
                              {errors[input.name].message}
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mg_botom_lg">
                  <SubmitBtn
                    btnText="Send"
                    fullWidth={true}
                    size="extra_large"
                    btnLoading={isBtnLoadin}
                    disabledBtn={!isValid}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
