const invertOrder = n => {
  let digit = 0;
  let isNegative = false;

  if (n < 0) {
    n *= -1;
    isNegative = true;
  }
  while (n > 0) {
    digit = digit * 10 + n % 10;
    n = ~~(n / 10);
  }

  return isNegative ? digit * -1 : digit;
};

console.log(invertOrder(15) === 51);
console.log(invertOrder(981) === 189);
console.log(invertOrder(500) === 5);
console.log(invertOrder(-90) === -9);
console.log(invertOrder(3005) === 5003);