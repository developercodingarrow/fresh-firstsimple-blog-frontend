export const updatePasswordInputs = [
  {
    id: 1,
    name: "currentpassword",
    placeholder: "enter your name !",
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
      required: "Password is required.",
    },
  },
];
