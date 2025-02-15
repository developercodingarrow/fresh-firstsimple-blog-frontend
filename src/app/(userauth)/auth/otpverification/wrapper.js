import React from "react";
import VerificationUi from "@/src/_components/auth_components/VerificationUi";
import { otpInputFiled } from "@/src/jsonData/formInputsData";
import { userotpVerfication } from "@/src/app/utils/userAuthaction";

export default function OTPVerificationwrapper(props) {
  const { slug } = props;
  return (
    <div>
      <VerificationUi
        formInputs={otpInputFiled}
        formHandel={userotpVerfication}
        formType="OTP"
        formHeading="Enter your OTP"
        formSubText="Check your email and enter the OTP to continue."
        btnText="Submit"
        pageslug={slug}
      />
    </div>
  );
}
