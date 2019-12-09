export function getNumericalSequence(n, m) {
  if (typeof n != 'number' || n <= 0 || n >= 100) {
    return {
      status: 'failed',
      reason: 'n should be a number between 1 and 99'
    };
  }
  if (typeof m != 'number' || m <= 0) {
    return {
      status: 'failed',
      reason: 'm should be a positive number'
    };
  }
  let root = Math.ceil(Math.sqrt(m));
  let result = '';
  for (let i = root; i < root + n; i++) {
    result += i + ',';
  }
  return result.slice(0, -1);
}
