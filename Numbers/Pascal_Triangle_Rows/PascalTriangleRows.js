const pascalTriangle = (numRows) => {
  const arr = [[1]];

  for (let i = 1; i < numRows; i++) {
    arr.push([]);
    arr[i][0] = arr[i][i]= 1;
  
    if(i > 1 ) {
      for (let j = 1, m = i - 1; j <= (i/2); j++, m--) {
        arr[i][j] = arr[i][m] = arr[i-1][j] + arr[i-1][j-1];
      }
    }
  }

  return arr;
}

console.log(JSON.stringify(pascalTriangle(1)) === JSON.stringify([[1]]));
console.log(JSON.stringify(pascalTriangle(3)) === JSON.stringify([[1],[1,1],[1,2,1]]));
console.log(JSON.stringify(pascalTriangle(5)) === JSON.stringify([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]));