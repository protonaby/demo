import {Validator} from "./validator.js";

export function getFibonacci(context) {
  const length = context.length;
  const min = context.min;
  const max = context.max;
  if (!Validator.isValueDefined(min)
    && !Validator.isValueDefined(max)
    && !Validator.isValueDefined(length)) {
    return {
      status: 'failed',
      reason: 'either length or min and max must be specified'
    };
  }
  if ((Number.isInteger(length) && Number.isInteger(min))
    || (Number.isInteger(length) && Number.isInteger(max))) {
    return {
      status: 'failed',
      reason: 'only one of length or min and max can be specified'
    };
  }
  if (Validator.isValueDefined(min) && !Validator.isValueDefined(max)) {
    return {
      status: 'failed',
      reason: 'both min and max should be specified'
    };
  }
  if (Validator.isValueDefined(max) && !Validator.isValueDefined(min)) {
    return {
      status: 'failed',
      reason: 'both min and max should be specified'
    };
  }
  if (Validator.isValueDefined(min) && Validator.isValueDefined(max)) {
    if (!Validator.isPositiveFloatNumberOrZero(min) || !Validator.isPositiveFloatNumberOrZero(max)) {
      return {
        status: 'failed',
        reason: 'min and max should be >= 0'
      };
    }
  }
  if (Validator.isValueDefined(length) && !Validator.isPositiveFloatNumberOrZero(length)) {
    return {
      status: 'failed',
      reason: 'length should be >= 0'
    };
  }
  if (Validator.isPositiveFloatNumberOrZero(length))
    return fibByLength(length);
  else
    return fibByRange(min, max);
}

function fibByRange(min, max) {
  if (max < min) return [];
  let f = [0, 1];
  let i = 2;
  let result = [];
  if (min === 0 && max === 0)
    result.push(0);
  else if (min === 0)
    result.push(0, 1);
  if (min === 1) result.push(1);
  while (f[i - 1] <= max) {
    f[i] = f[i - 1] + f[i - 2];
    if (f[i] >= min && f[i] <= max)
      result.push(f[i]);
    i += 1;
  }
  return result;
}

function fibByLength(length) {
  let f = [0, 1];
  let i = 2;
  let result = length === 1 ? [0, 1] : [];
  while (f[i - 1].toString().length <= length) {
    f[i] = f[i - 1] + f[i - 2];
    if (f[i].toString().length === length)
      result.push(f[i]);
    i += 1;
  }
  return result;
}
