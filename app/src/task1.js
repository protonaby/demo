export function displayChessBoard(height, width, symbol) {
  if (height > 100 || height <= 0 || width > 100 || width <= 0) {
    return {
      status: 'failed',
      reason: 'width and height should be > 0 and <= 100'
    };
  }
  if (typeof symbol != "string" || symbol.length != 1) {
    return {
      status: 'failed',
      reason: 'symbol should be a String with one letter'
    };
  }
  let result = '';
  const oddRow = (symbol + '  ').repeat(width);
  const evenRow = oddRow.split('').reverse().join('');
  for (let i = 0; i < height; i += 1) {
    result += (i % 2) ? evenRow + '\n' : oddRow + '\n';
  }
  return result;
}
