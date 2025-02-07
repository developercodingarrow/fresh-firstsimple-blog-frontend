import React from "react";
import ResetPasswordwrapper from "./wrapper";

export const metadata = {
  title: "LitVerseHub | Reset Password",
  description: "Regain access by resetting your password.",
};

export default function ResetPasswordpage({ params }) {
  const { token } = params;
  return (
    <div>
      <ResetPasswordwrapper slug={token} />
    </div>
  );
}
