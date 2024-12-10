"use client";
import React from "react";
import VerificationUi from "@/src/_components/auth_components/VerificationUi";
import { forgotPasswordInputFileds } from "@/src/jsonData/formInputsData";

export default function ForgotPasswordwrapper() {
  return (
    <div>
      <VerificationUi
        formInputs={forgotPasswordInputFileds}
        formType="OTP"
        formHeading="Find Your Account"
        formSubText="Please enter your email address or mobile number to search for your account."
      />
    </div>
  );
}
