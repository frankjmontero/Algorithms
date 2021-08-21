const chunkArray = (arr, size) => {
  let chunkedArray = [[]];

  for (let i = 1, j = 0; i <= arr.length; i++) {
    if (chunkedArray[j].length === size) {
      chunkedArray[++j] = [];
    }
    chunkedArray[j].push(arr[i-1]);
  }
  return chunkedArray;
}

console.log(JSON.stringify(chunkArray([1,2,3,6,4,8,9,7,10],5)) === JSON.stringify([[1,2,3,6,4],[8,9,7,10]]));
console.log(JSON.stringify(chunkArray([1,2,3,6,4,8,9,7,10],2)) === JSON.stringify([[1,2],[3,6],[4,8],[9,7],[10]]));