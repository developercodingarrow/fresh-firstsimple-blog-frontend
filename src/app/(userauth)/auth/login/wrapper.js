"use client";
import React from "react";
import SignInSignUpUI from "@/src/_components/auth_components/SignInSignUpUI";
import { userLoginInputs } from "@/src/jsonData/formInputsData";

export default function Loginwrapper() {
  return (
    <div>
      <SignInSignUpUI
        formInputs={userLoginInputs}
        formType="LOGIN"
        forgotpasswordLink="auth/forgot-password"
      />
    </div>
  );
}
