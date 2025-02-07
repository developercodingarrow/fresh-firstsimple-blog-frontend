"use client";
import React from "react";
import VerificationUi from "@/src/_components/auth_components/VerificationUi";
import { resetPasswordInputFileds } from "@/src/jsonData/formInputsData";
import { userResetPasswordAction } from "@/src/app/utils/userAuthaction";

export default function ResetPasswordwrapper(props) {
  const { slug } = props;

  return (
    <div>
      <VerificationUi
        formInputs={resetPasswordInputFileds}
        formHandel={userResetPasswordAction}
        formType="resetPassword"
        formHeading="Reset Your password"
        formSubText="Please enter your email address or mobile number to search for your account."
        btnText="Reset Password"
        pageslug={slug}
      />
    </div>
  );
}
