# **Get N Fibonacci Number**

A Pascal's triangle is composed of lines each of which are the results of adding in pairs the numbers of the previous line. This results on each number being the sum of the two numbers right above them.

    1
   1 1
  1 2 1
 1 3 3 1
1 4 6 4 1

Write a function that returns the first `n` numbers of rowsk in the Pascal's triangle.

## **Testing**

Run instructions:

In Javascript
```
node PascalTriangleRows.js
```

Testing values
```js
console.log(JSON.stringify(pascalTriangle(1)) === JSON.stringify([[1]]));
console.log(JSON.stringify(pascalTriangle(3)) === JSON.stringify([[1],[1,1],[1,2,1]]));
console.log(JSON.stringify(pascalTriangle(5)) === JSON.stringify([[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]));
```