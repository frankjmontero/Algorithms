const firstDigit = (n) => {
  const units = ~~Math.log10(n);
  const base = 10;

  n = ~~(n / base ** units); 

  return n;
}

console.log(firstDigit(568468) === 5);
console.log(firstDigit(3) === 3);
console.log(firstDigit(77) === 7);