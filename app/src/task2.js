import {Validator} from "./validator.js";

export function analyzeEnvelops(first, second) {
  const a = first.a;
  const b = first.b;
  const c = second.c;
  const d = second.d;

  if (!Validator.isFloatPointNumberInRange(a, 1, 1000000)
    || !Validator.isFloatPointNumberInRange(b, 1, 1000000)
    || !Validator.isFloatPointNumberInRange(c, 1, 1000000)
    || !Validator.isFloatPointNumberInRange(d, 1, 1000000))
    return {
      status: 'failed',
      reason: 'a, b, c and d should be numbers between 1 and 1000000'
    };

  normalize(first, second);
  if (envelopFits(a, b, c, d))
    return 2;
  if (envelopFits(c, d, a, b))
    return 1;
  return 0;
}

function envelopFits(a, b, c, d) {
  if (a < c && b < d)
    return true;
  if (a * b > c * d)
    return false;
  if (Math.sqrt(a ** 2 + b ** 2) > Math.sqrt(c ** 2 + d ** 2))
    return false;
  for (let alpha = 90; alpha >= 0; alpha -= 1) {
    const alphaRad = alpha * Math.PI / 180;
    const p = b * Math.cos(alphaRad) + a * Math.sin(alphaRad);
    const q = b * Math.sin(alphaRad) + a * Math.cos(alphaRad);
    if (p < d && q < c) {
      return true;
    }
  }
  return false;
}

function normalize(first, second) {
  if (first.b < first.a)
    [first.a, first.b] = [first.b, first.a];
  if (second.d < second.c)
    [second.c, second.d] = [second.d, second.c];
}
