import {Validator} from "./validator.js";

export function displayChessBoard(height, width, symbol) {
  if(!Validator.isNumberInRange(height, 1, 100) || !Validator.isNumberInRange(width, 1, 100))
    return {
      status: 'failed',
      reason: 'height and width should be numbers between 1 and 100'
    };
  if(!Validator.isSingleCharString(symbol))
    return {
      status: 'failed',
      reason: 'symbol should be a single letter'
    };
  let result = '';
  const oddRow = (symbol + '  ').repeat(width);
  const evenRow = oddRow.split('').reverse().join('');
  for (let i = 0; i < height; i += 1) {
    result += (i % 2) ? evenRow + '\n' : oddRow + '\n';
  }
  return result;
}
