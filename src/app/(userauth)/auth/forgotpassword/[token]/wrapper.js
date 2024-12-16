"use client";
import React from "react";
import VerificationUi from "@/src/_components/auth_components/VerificationUi";
import { resetPasswordInputFileds } from "@/src/jsonData/formInputsData";

export default function ResetPasswordwrapper() {
  return (
    <div>
      <VerificationUi
        formInputs={resetPasswordInputFileds}
        formType="resetPassword"
        formHeading="Reset Your password"
        formSubText="Please enter your email address or mobile number to search for your account."
      />
    </div>
  );
}
