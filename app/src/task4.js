export function getPalindrome(number) {
  if (number < 10 || number >= 9007199254740991) {
    return {
      status: 'failed',
      reason: 'input number should be between 10 and 9007199254740990'
    };
  }
  let palindromes = [];
  const arr = number.toString().split('');
  for (let k = arr.length; k >= 2; k -= 1) {
    for (let i = 0; i < arr.length - 1; i += 1) {
      let subStr = '';
      for (let j = 0; j < k; j += 1) {
        subStr = subStr + arr[i + j];
      }
      if (isPalibdrome(subStr))
        palindromes.push(subStr);
    }
  }
  if (palindromes.length > 0) {
    palindromes.sort((a, b) => b.length - a.length);
    return palindromes[0];
  }
  return 0;
}

function isPalibdrome(str) {
  return str.split('').reverse().join('') === str;
}
