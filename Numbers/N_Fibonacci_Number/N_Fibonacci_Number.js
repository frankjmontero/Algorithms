let fibSec = n => {
  let a = 0, b = 1;
  for(let i = 1; i < n; i++) {
    a += b;
    b = a - b;
    a -= b;
    b += a;
  }
  
  return b;
}

console.log(fibSec(1) === 1);
console.log(fibSec(5) === 5);
console.log(fibSec(7) === 13);
console.log(fibSec(8) === 21);