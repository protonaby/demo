export function countLuckyTickets(context) {
  const min = context.min;
  const max = context.max;
  if (min.length != 6 || max.length != 6 || !/^[0-9]*$/.test(min) || !/^[0-9]*$/.test(max)) {
    return {
      status: 'failed',
      reason: 'min and max should be strings representing numbers between 000000 and 999999'
    };
  }
  let simple = 0;
  let hard = 0;
  for (let num = +min; num <= +max; num++) {
    let s = num.toString().padStart(6, '0');
    if (+s[0] + +s[1] + +s[2] == +s[3] + +s[4] + +s[5]) {
      simple++;
    } else if (+s[0] + +s[2] + +s[4] == +s[1] + +s[3] + +s[5]) {
      hard++;
    }
  }
  let winner = simple > hard ? 'Simple' : 'Hard';
  if (simple == hard) winner = 'draw';
  
  return {
    winner: winner,
    simple: simple,
    hard: hard
  };
}
