"use client";
import React, { useContext } from "react";
import SignInSignUpUI from "@/src/_components/auth_components/SignInSignUpUI";
import { userLoginInputs } from "@/src/jsonData/formInputsData";
import { userLoginAction } from "@/src/app/utils/userAuthaction";
import { AuthContext } from "@/src/_contextApi/authContext";

export default function Loginwrapper() {
  const { authUser } = useContext(AuthContext);
  return (
    <div>
      <SignInSignUpUI
        formInputs={userLoginInputs}
        formType="LOGIN"
        formHandel={userLoginAction}
        btnText="LOGIN"
        userAuthData={authUser}
        footerLink="auth/signup"
        formheading="Welcome Back"
        suHeading="if have no Account?"
        footerText="signup"
        forgotpasswordLink="auth/forgotpassword"
      />
    </div>
  );
}
