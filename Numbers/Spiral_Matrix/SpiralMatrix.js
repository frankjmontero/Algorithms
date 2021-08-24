const generateSpiralMatrix = n => {
  let side = 'a';
  let x = 0, y = 0;
  let moves = n-1;
  let nMoves = moves;
  const ceroMoves = 0;
  const matrix = [...Array(n)].map( i => Array(n).fill(0));


  for (let i = 1; i <= n*n; i++) {
    
    matrix[y][x] = i;
    
    switch (side) {
      case 'a':
        if (nMoves === ceroMoves) {
          side = 'b';
          if (i > n) {
            moves--;
          }
          nMoves = moves;
        } else {
          x++;
          nMoves--;
          break;
        }
      case 'b':
        if (nMoves === ceroMoves) {
          side = 'c';
          nMoves = moves;
        } else {
          y++;
          nMoves--;
          break;
        }
      case 'c':
        if (nMoves === ceroMoves) {
          side = 'd';
          nMoves = --moves;
        } else {
          x--;
          nMoves--;
          break;
        }
      case 'd':
        if (nMoves === ceroMoves) {
          side = 'a';
          nMoves = moves - 1;
          x++;
          break;
        } else {
          y--;
          nMoves--;
        }
    }
  }

  for(row of matrix) console.log(row);

  return matrix;
};

console.log(JSON.stringify(generateSpiralMatrix(2)) === JSON.stringify([[1,2],[4,3]]));
console.log(JSON.stringify(generateSpiralMatrix(3)) === JSON.stringify([[1,2,3],[8,9,4],[7,6,5]]));