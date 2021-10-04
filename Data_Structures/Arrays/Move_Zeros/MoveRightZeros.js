const moveZeros = (num) => {
  let steps = 0;
  const arrLength = num.length;

  for (let i = 0; i < arrLength; i++) {
    if(steps+i < arrLength) {
      if (num[i] === 0) {
        num[i-steps] = num[i+1];
        steps++;
      }
      continue
    }

    num[i-steps] = num[i];
    num[i] = 0;
  }
}

const arr = [0,1,0,3,12];
moveZeros(arr);
console.log(JSON.stringify(arr) === JSON.stringify([1,3,12,0,0]));

const arr2 = [1,0,4,0,0,10,20,100];
moveZeros(arr2);
console.log(JSON.stringify(arr2) === JSON.stringify([1,4,10,20,100,0,0,0]));