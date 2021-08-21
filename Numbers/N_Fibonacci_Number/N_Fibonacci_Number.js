let fibSec = n => {
  let a = 0, b = 1;
  let i = (n % 2) === 1 ? 1 : 0 ;
  for(; i < n; i = i + 2) {
    a += b;
    b += a;
  }
  return (n % 2) === 1 ? b : a;
}

console.log(fibSec(1) === 1);
console.log(fibSec(5) === 5);
console.log(fibSec(7) === 13);
console.log(fibSec(8) === 21);