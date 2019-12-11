import {Validator} from "./validator.js";

export function getNumericalSequence(n, m) {
  if(!Validator.isNumberInRange(n, 1, 99))
    return {
      status: 'failed',
      reason: 'n should be a number between 1 and 99'
    };
  if (!Validator.isPositiveFloatNumber(m)) {
    return {
      status: 'failed',
      reason: 'm should be a positive number'
    };
  }
  const root = Math.ceil(Math.sqrt(m));
  let result = '';
  for (let i = root; i < root + n; i += 1) {
    result += i + ',';
  }
  return result.slice(0, -1);
}
