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
        btnText="Register"
        userAuthData={authUser}
        suHeading="Already have an Account?"
        footerLink="auth/login"
        footerText="Login"
      />
    </div>
  );
}
