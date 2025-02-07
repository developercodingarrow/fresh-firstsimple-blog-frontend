import React from "react";
import OTPVerificationwrapper from "../wrapper";

export const metadata = {
  title: "LitVerseHub | OTP Verification",
  description: "Verify your OTP to complete registration.",
};

export default function OtpVerificationpage({ params }) {
  const { slug } = params;
  return (
    <div>
      <OTPVerificationwrapper slug={slug} />
    </div>
  );
}
