export class Validator {

  static isNumberInRange(number, min, max) {
    return Number.isInteger(number) && number >= min && number <= max;
  }

  static isFloatPointNumberInRange(number, min, max) {
    return typeof number === 'number' && !isNaN(number) && number >= min && number <= max;
  }

  static isSingleCharString(str) {
    return typeof str === "string" && str.length === 1;
  }

  static isValidTriangle(t) {
    const verticesNames = t.vertices.toLowerCase().split('');
    const a = t[verticesNames[0]];
    const b = t[verticesNames[1]];
    const c = t[verticesNames[2]];
    return a <= b + c && b <= c + a && c <= a + b;
  }

  static isValidTriangleObject(t) {
    const verticesNames = t.vertices.toLowerCase().split('');
    const a = t[verticesNames[0]];
    const b = t[verticesNames[1]];
    const c = t[verticesNames[2]];
    return !(a === undefined || b === undefined || c === undefined);
  }

  static isValidTicketNumber(number) {
    return number.length === 6 && /^[0-9]*$/.test(number);
  }

  static isPositiveNumber(n) {
    return typeof n === 'number' && n > 0;
  }

  static isPositiveNumberWhenDefined(n) {
    return n === undefined || length >= 0;
  }
}