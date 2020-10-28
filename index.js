/* eslint-disable valid-typeof */
/* eslint-disable no-console */

import { validateObject } from "./validator/validator.mjs";
import { userScheme } from "./validation/schemes/user.mjs";
import { user, me } from "./model/users.mjs";

function dumpErrors(errorList, validatedObject) {
  errorList.forEach((error) => {
    console.log(`Field: ${error.key}`);
    console.log(`Provided value: ${validatedObject[error.key]}`);
    console.log(`Message: ${error.message}`);
  });
}

const result = validateObject(me, userScheme);

if (result.length !== 0) {
  dumpErrors(result, me);
} else {
  console.log(`All is ok`);
}
