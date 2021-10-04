const firstDigit = (n) => ~~(n / (10 ** ~~(Math.log10(n))));

console.log(firstDigit(568468) === 5);
console.log(firstDigit(3) === 3);
console.log(firstDigit(77) === 7);