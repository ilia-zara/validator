/* eslint-disable valid-typeof */
/* eslint-disable no-console */

import {checkType, nonEmptyString, numberInRange} from "./validators.js";

const user = {
    firstName: "test",
    lastName: "test",
    age: 30,
    phone: "212412342134",
  };
  
const userScheme = {
    firstName: [
      {
        validator: {
          rule: checkType,
          params: ["string"]
        },
        validationMessage: "First Name not string",
      },
      {
        validator: {
          rule: nonEmptyString,
          params: []
        }, 
        validationMessage: "First Name is empty",
      },
    ],
    lastName: [
      {
        validator: {
          rule: checkType,
          params: ["string"]
        },
        validationMessage: "Last Name not string",
      },
      {
        validator: {
          rule: nonEmptyString,
          params: []
        },
        validationMessage: "Last Name is empty",
      },
    ],
    age: [
      {
        validator: {
          rule: checkType,
          params: ["number"]
        },
        validationMessage: "Age not number",
      },
      {
        validator: {
          rule: numberInRange,
          params: [10, 56]
        },
        validationMessage: `Age not in range between 10 and 56`,
      },
    ],
    phone: [
      {
        validator: {
          rule: checkType,
          params: ["string"]
        },
        validationMessage: "Phone not string",
      },
    ],
  };

  export {user, userScheme};