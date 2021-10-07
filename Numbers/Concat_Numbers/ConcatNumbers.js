const concatNumbers = (n1, n2) => {
  const nDigits = ~~Math.log10(n2) + 1;
  n1 = (n1 * 10 ** nDigits) + n2;
  return n1;
};
console.log(concatNumbers(100, 1660));