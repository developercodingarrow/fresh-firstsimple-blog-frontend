import React from "react";
import VerificationUi from "@/src/_components/auth_components/VerificationUi";
import { otpInputFiled } from "@/src/jsonData/formInputsData";
import { userotpVerfication } from "@/src/app/utils/userAuthaction";

export default function OTPVerificationwrapper() {
  return (
    <div>
      <VerificationUi
        formInputs={otpInputFiled}
        formHandel={userotpVerfication}
        formType="OTP"
        formHeading="OTP Verification"
        formSubText="please Enter you otp which is sent to your E-mail Address"
      />
    </div>
  );
}
