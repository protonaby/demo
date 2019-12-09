export function analizeEnvelops(first, second) {
  if (typeof(first.a) != 'number' ||
    typeof(first.b) != 'number' ||
    typeof(second.c) != 'number' ||
    typeof(second.d) != 'number' ||
    first.a <= 0 || first.a >= 1000000 ||
    first.b <= 0 || first.b >= 1000000 ||
    second.c <= 0 || second.c >= 1000000 ||
    second.d <= 0 || second.da >= 1000000) {
    return {
      status: 'failed',
      reason: 'a, b, c and d should be numbers between 1 and 1000000'
    };
  }
  normalize(first, second);
  if (envelopFits(first.a, first.b, second.c, second.d))
    return 2;
  if (envelopFits(second.c, second.d, first.a, first.b))
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
    let alphaRad = alpha * Math.PI / 180;
    let p = b * Math.cos(alphaRad) + a * Math.sin(alphaRad);
    let q = b * Math.sin(alphaRad) + a * Math.cos(alphaRad);
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
