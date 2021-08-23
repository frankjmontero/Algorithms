const drawPyramid = h => Array(h).fill('').forEach((value, i) => 
console.log(`'${' '.repeat(h-i-1)}${'#'.repeat(i*2+1)}${' '.repeat(h-i-1)}'`));

drawPyramid(3);