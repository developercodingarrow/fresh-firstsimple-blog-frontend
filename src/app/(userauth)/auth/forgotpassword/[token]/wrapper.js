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
        formHeading="Reset your password"
        formSubText="Set a strong password for better security."
        btnText="Reset Password"
        pageslug={slug}
      />
    </div>
  );
}
