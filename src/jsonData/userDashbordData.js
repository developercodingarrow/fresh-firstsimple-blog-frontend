// (1 user name input filed
export const nameinput = [
  {
    id: 1,
    name: "name",
    placeholder: "enter your name !",
    type: "text",
    inputSize: "large",
    inputType: "text",
    validation: {
      required: "Name is required.",
      minLength: {
        value: 3, // Minimum length required
        message: "Name must be at least 3 characters long.", // Error message
      },
    },
  },
];
// (2 username input filed
export const userNameinput = [
  {
    id: 2,
    name: "userName",
    placeholder: "username !",
    type: "text",
    inputSize: "large",
    inputType: "text",
    validation: {
      required: "username is required.",
    },
  },
];
// (3 facbook input filed
export const facbookinput = [
  {
    id: 4,
    name: "facebook",
    placeholder: "facebook !",
    type: "text",
    inputSize: "large",
    inputType: "text",
    validation: {
      required: "Facebook profile link is required.",
    },
  },
];
// (4 twiiter input filed
export const twitterinput = [
  {
    id: 5,
    name: "twitter",
    placeholder: "twitter !",
    type: "text",
    inputSize: "large",
    inputType: "text",
    validation: {
      required: "X (Twitter) profile link is required.",
    },
  },
];
// (4 Website input filed
export const webisteinput = [
  {
    id: 3,
    name: "businessWebsite",
    placeholder: "Website !",
    type: "text",
    inputSize: "large",
    inputType: "text",
    validation: {
      required: "Website URL is required.",
    },
  },
];

export const emaiinput = [
  {
    id: 3,
    name: "email",
    placeholder: "email !",
    type: "text",
    inputSize: "large",
    inputType: "text",
    validation: {
      required: "Name is required.",
    },
  },
];

export const bioinput = [
  {
    id: 2,
    name: "bio",
    placeholder: " Write About You !",
    type: "textarea",
    inputType: "textarea",
    validation: {
      required: "About Content is required.",
    },
  },
];

export const instagraminput = [
  {
    id: 6,
    name: "instagram",
    placeholder: "instagram !",
    type: "text",
    inputSize: "large",
    inputType: "text",
    validation: {
      required: "instagram profile link is required.",
    },
  },
];

export const userApiData = {
  userName: "sanjay...",
  name: "sandeep",
  email: "sandep@gmail.com",
};
