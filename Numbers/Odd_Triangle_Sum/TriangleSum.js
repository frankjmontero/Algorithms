const sumRow = r => {
  if (r === 1) return r;
  let prev = r * (r-1) + 1, sum = prev;
  
  for (let i = 1; i < r; i++) {
    sum += prev += 2;
  }

  return sum;
}

console.log(sumRow(1) === 1);
console.log(sumRow(4) === 64);
console.log(sumRow(6) === 216);
