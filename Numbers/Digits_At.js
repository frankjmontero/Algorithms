
function getDigitsAt (num, position) {
  let digit = 0;
  const arrDigits = [];

  while (num > 0) {
    digit = num % 10;
    num = num / 10 >>0;
    arrDigits.push(digit);
  }

  return arrDigits[position-1];
}

console.log( getDigitsAt(23456, 1) === 6); // 6
console.log(getDigitsAt(23456, 2) === 5); // 5
console.log(getDigitsAt(23456, 3) === 4); // 4
console.log(getDigitsAt(23456, 4) === 3); // 3
console.log(getDigitsAt(23456, 5) === 2); // 2
