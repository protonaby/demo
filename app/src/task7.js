export function getFibonacci(context) {
  const length = context.length;
  const min = context.min;
  const max = context.max;
  if (length !== undefined && min !== undefined && max !== undefined) {
    return {
      status: 'failed',
      reason: 'only one of length or min and max can be specified'
    };
  }
  if (length === undefined && min === undefined && max === undefined) {
    return {
      status: 'failed',
      reason: 'either length or min and max must be specified'
    };
  }
  if (length !== undefined && length <= 0) {
    return {
      status: 'failed',
      reason: 'length should be > 0'
    };
  }
  if ((max !== undefined && max < 0) || (min !== undefined && min < 0)) {
    return {
      status: 'failed',
      reason: 'min and max should be >= 0'
    };
  }

  if (length !== undefined)
    return fibByLength(length);
  else
    return fibByRange(min, max);
}

function fibByRange(min, max) {
  let f = [0, 1];
  let i = 2;
  let result = [];
  if (min == 0) result.push(0, 1);
  if (min == 1) result.push(1);
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
  let result = length == 1 ? [0, 1] : [];
  while (f[i - 1].toString().length <= length) {
    f[i] = f[i - 1] + f[i - 2];
    if (f[i].toString().length == length)
      result.push(f[i]);
    i += 1;
  }
  return result;
}
