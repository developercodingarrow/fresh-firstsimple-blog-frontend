"use client";
import React from "react";
import VerificationUi from "@/src/_components/auth_components/VerificationUi";
import { forgotPasswordInputFileds } from "@/src/jsonData/formInputsData";
import { userfogotePasswordAction } from "@/src/app/utils/userAuthaction";

export default function ForgotPasswordwrapper() {
  return (
    <div>
      <VerificationUi
        formInputs={forgotPasswordInputFileds}
        formHandel={userfogotePasswordAction}
        formType="OTP"
        formHeading="Find Your Account"
        formSubText="Please enter your email address to search for your account."
        btnText="SEND OTP"
      />
    </div>
  );
}
