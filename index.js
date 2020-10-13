/* eslint-disable valid-typeof */
/* eslint-disable no-console */

import {checkType, nonEmptyString, numberInRange} from "./modules/validators.js";

import {validateFiled, validateObject} from "./modules/validations.js";

import dumpErrors from "./modules/print-results.js"

import {user, userScheme} from "./modules/input-data.js"


const result = validateObject(user, userScheme);

if (result.length !== 0) {
  dumpErrors(result, user);
} else {
  console.log(`All is ok`);
}
