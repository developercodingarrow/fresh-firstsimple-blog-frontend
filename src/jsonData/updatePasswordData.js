// 1) update password inputs
export const updatePasswordInputs = [
  {
    id: 1,
    name: "currentpassword",
    placeholder: "enter Current Password !",
    type: "text",
    lable: "Curent password ",
    inputType: "text",
    inputSize: "small",
    validation: {
      required: "Current password is required.",
    },
  },

  {
    id: 2,
    name: "password",
    type: "password",
    placeholder: "password",
    lable: "New Password",
    inputType: "password",
    inputSize: "small",
    validation: {
      required: "New password is required.",
      minLength: {
        value: 8, // Minimum length required
        message: "Password must be at least 8 characters long.", // Error message
      },
    },
  },
];
