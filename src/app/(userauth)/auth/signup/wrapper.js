"use client";
import React, { useContext } from "react";
import SignInSignUpUI from "@/src/_components/auth_components/SignInSignUpUI";
import { userRegistraionInputs } from "@/src/jsonData/formInputsData";
import { userRegisterAction } from "@/src/app/utils/userAuthaction";
import { AuthContext } from "@/src/_contextApi/authContext";

export default function SingUpWrapper() {
  const { authUser } = useContext(AuthContext);
  return (
    <div>
      <SignInSignUpUI
        formInputs={userRegistraionInputs}
        formType="SINGUP"
        formHandel={userRegisterAction}
        btnText="Join Now"
        userAuthData={authUser}
        formheading="Create an account"
        suHeading="Already have an account ?"
        footerLink="auth/login"
        footerText="Log in"
      />
    </div>
  );
}
