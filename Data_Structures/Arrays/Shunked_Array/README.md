# **Chunk An Array**

Divides an array in smaller arrays of an indicated size.

## **Testing**

Run instructions:

In Javascript
```
node ChunkArray.js
```

Test values
```js
console.log(JSON.stringify(chunkArray([1,2,3,6,4,8,9,7,10],5)) === JSON.stringify([[1,2,3,6,4],[8,9,7,10]]));
console.log(JSON.stringify(chunkArray([1,2,3,6,4,8,9,7,10],2)) === JSON.stringify([[1,2],[3,6],[4,8],[9,7],[10]]));
```