const moveZeros = (n) => {
  for (let i = 0, j = n.length - 1; i < j;) {
    if (n[i] === 0) {
      for (let m = i; m < j; m++) {
        n[m] = n[m+1];
      }
      n[j] = 0;
      j--;
      i--;
    }
    i++;
  }
};

const arr = [0,1,0,3,12];
moveZeros(arr);
console.log(JSON.stringify(arr) === JSON.stringify([1,3,12,0,0]));

const arr2 = [1,0,4,0,0,10,20,100];
moveZeros(arr2);
console.log(JSON.stringify(arr2) === JSON.stringify([1,4,10,20,100,0,0,0]));