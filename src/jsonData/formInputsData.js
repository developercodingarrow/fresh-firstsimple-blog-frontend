// (1 User Regestraion form filed
export const userRegistraionInputs = [
  {
    id: 1,
    name: "name",
    placeholder: "enter your name !",
    type: "text",
    lable: "Name",
    inputType: "text",
    inputSize: "extra_large",
    validation: {
      required: "Name is required.",
      minLength: {
        value: 3, // Minimum length required
        message: "Name must be at least 3 characters long.", // Error message
      },
    },
  },

  {
    id: 2,
    name: "email",
    placeholder: "enter your Valid Email address !",
    type: "text",
    lable: "Email",
    inputType: "text",
    inputSize: "extra_large",
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
    inputSize: "extra_large",
    validation: {
      required: "Password is required.",
      minLength: {
        value: 8, // Minimum length required
        message: "Password must be at least 8 characters long.", // Error message
      },
    },
  },
];

// (2 User Login form filed
export const userLoginInputs = [
  {
    id: 1,
    name: "email",
    placeholder: "enter your Valid Email address !",
    type: "email",
    lable: "Email",
    inputType: "text",
    inputSize: "extra_large",
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
    inputSize: "extra_large",
    inputLink: {
      name: "forgot password",
      hrfLink: "forgot-password",
    },
    validation: {
      required: "Password is required.",
      minLength: {
        value: 8, // Minimum length required
        message: "Password must be at least 8 characters long.", // Error message
      },
    },
  },
];

// (3 User OTP form filed
export const otpInputFiled = [
  {
    id: 1,
    name: "otp",
    placeholder: "Enter Sent OTP!",
    type: "text",
    label: "OTP",
    inputType: "text",
    inputSize: "extra_large",
    validation: {
      required: "OTP is required.",
      minLength: {
        value: 6,
        message: "OTP must be exactly 6 digits.",
      },
      maxLength: {
        value: 6,
        message: "OTP must be exactly 6 digits.",
      },
    },
  },
];

// (4 User Forgot password form filed
export const forgotPasswordInputFileds = [
  {
    id: 1,
    name: "email",
    placeholder: "enter your Valid Email address !",
    type: "text",
    lable: "Email",
    inputType: "text",
    inputSize: "extra_large",
    validation: {
      required: "Email is required.",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address.",
      },
    },
  },
];

// (5 User Reset password form filed
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
    options: ["spam", "harassment", "rules_violation"],
    optionlable: {
      spam: "spam",
      harassment: "Harassment",
      rules_violation: "Rules Violation",
    },
    validation: {
      required: "Please select a report option.",
    },
  },
];
