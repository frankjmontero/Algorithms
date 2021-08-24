# **Matrix of Spiraled Sequence**

`n` is the matrix size. The function fills the matrix with a spiral formed by a number sequence.

## **Testing**

Run instructions:

In Javascript
```
node SpiralMatrix.js
```

Testing values
```js
console.log(JSON.stringify(generateSpiralMatrix(2)) === JSON.stringify([[1,2],[4,3]]));
// [ 1, 2 ]
// [ 4, 3 ]
// true

console.log(JSON.stringify(chunkArray([1,2,3,6,4,8,9,7,10],2)) === JSON.stringify([[1,2],[3,6],[4,8],[9,7],[10]]));
// [ 1, 2, 3 ]
// [ 8, 9, 4 ]
// [ 7, 6, 5 ]
// true
```