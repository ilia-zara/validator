import { checkType, nonEmptyString, numberInRange } from "../rules/rules.mjs";

const userScheme = {
  firstName: [
    {
      validator: {
        rule: checkType,
        params: ["string"],
      },
      validationMessage: "First Name is not a string",
    },
    {
      validator: {
        rule: nonEmptyString,
        params: [],
      },
      validationMessage: "First Name is empty",
    },
  ],
  lastName: [
    {
      validator: {
        rule: checkType,
        params: ["string"],
      },
      validationMessage: "Last Name is not a string",
    },
    {
      validator: {
        rule: nonEmptyString,
        params: [],
      },
      validationMessage: "Last Name is empty",
    },
  ],
  age: [
    {
      validator: {
        rule: checkType,
        params: ["number"],
      },
      validationMessage: "Age is not a number",
    },
    {
      validator: {
        rule: numberInRange,
        params: [10, 56],
      },
      validationMessage: `Age is not in range between 10 and 56`,
    },
  ],
  phone: [
    {
      validator: {
        rule: checkType,
        params: ["string"],
      },
      validationMessage: "Phone is not a string",
    },
  ],
};

export { userScheme };
