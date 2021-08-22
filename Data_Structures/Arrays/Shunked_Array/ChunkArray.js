const chunkArray = (arr, size) => {
  let chunkedArray = [];
  let tempArr = [];

  for (let i = 1; i <= arr.length; i++) {
    tempArr.push(arr[i-1]);
    if (tempArr.length === size || i === arr.length) {
      chunkedArray.push(tempArr);
      tempArr = [];
    }
  }
  return chunkedArray;
}

console.log(JSON.stringify(chunkArray([1,2,3,6,4,8,9,7,10],5)) === JSON.stringify([[1,2,3,6,4],[8,9,7,10]]));
console.log(JSON.stringify(chunkArray([1,2,3,6,4,8,9,7,10],2)) === JSON.stringify([[1,2],[3,6],[4,8],[9,7],[10]]));