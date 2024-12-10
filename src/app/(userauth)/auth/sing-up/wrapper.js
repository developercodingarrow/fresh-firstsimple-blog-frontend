"use client";
import React from "react";
import SignInSignUpUI from "@/src/_components/auth_components/SignInSignUpUI";
import { userRegistraionInputs } from "@/src/jsonData/formInputsData";

export default function SingUpWrapper() {
  return (
    <div>
      <SignInSignUpUI formInputs={userRegistraionInputs} formType="SINGUP" />
    </div>
  );
}
