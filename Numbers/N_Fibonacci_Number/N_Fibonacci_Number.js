let fibSec1 = n => {
  let a = 0, b = 1;
  for(let i = 1; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

console.log(fibSec1(1) === 1);
console.log(fibSec1(5) === 5);
console.log(fibSec1(7) === 13);
console.log(fibSec1(8) === 21);