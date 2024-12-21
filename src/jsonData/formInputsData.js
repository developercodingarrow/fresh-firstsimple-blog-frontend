export const userRegistraionInputs = [
  {
    id: 1,
    name: "name",
    placeholder: "enter your name !",
    type: "text",
    lable: "user Name",
    inputType: "text",
    inputSize: "small",
    validation: {
      required: "Name is required.",
    },
  },

  {
    id: 2,
    name: "email",
    placeholder: "enter your Valid Email address !",
    type: "text",
    lable: "Email",
    inputType: "text",
    inputSize: "small",
    validation: {
      required: "Email is required.",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address.",
      },
    },
  },

  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "password",
    lable: "password",
    inputType: "password",
    inputSize: "small",
    validation: {
      required: "Password is required.",
    },
  },
];

export const userLoginInputs = [
  {
    id: 1,
    name: "email",
    placeholder: "enter your Valid Email address !",
    type: "text",
    lable: "Email",

    inputType: "text",
    inputSize: "small",
    validation: {
      required: "Email is required.",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address.",
      },
    },
  },

  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "password",
    lable: "Password",
    inputType: "password",
    inputSize: "small",
    inputLink: {
      name: "forgot password",
      hrfLink: "forgot-password",
    },
    validation: {
      required: "Password is required.",
    },
  },
];

export const otpInputFiled = [
  {
    id: 1,
    name: "otp",
    placeholder: "Enter Sent OTP !",
    type: "text",
    lable: "OTP",
    inputType: "text",
    inputSize: "small",
    validation: {
      required: "OTP is required.",
    },
  },
];

export const forgotPasswordInputFileds = [
  {
    id: 1,
    name: "email",
    placeholder: "enter your Valid Email address !",
    type: "text",
    lable: "Email",
    inputType: "text",
    inputSize: "small",
    validation: {
      required: "Email is required.",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address.",
      },
    },
  },
];

export const resetPasswordInputFileds = [
  {
    id: 3,
    name: "password",
    type: "password",
    placeholder: "password",
    lable: "New password",
    inputType: "password",
    inputSize: "small",
    validation: {
      required: "Password is required.",
    },
  },
];

export const ReportContentradioOptions = [
  {
    id: 1,
    name: "reportcontent",
    inputType: "radio",
    label: "Select one of these to Report Content ",
    options: ["Spam", "Harassment", "Rules Violation"],
    validation: {
      required: "Please select a report option.",
    },
  },
];
