const highestConsecutiveSum = (arr, k) => {
  highestSum = 0;
  sumIndex = 0;

  for(let i = 0; i < arr.length - k; i++) {
    let sum = 0;
    
    for(let j = 0; j < k; j++) {
      sum += arr[i+j];
    }

    if(sum > highestSum) {
      highestSum = sum;
      sumIndex = i;
    }
  }

  console.log(`  Highest possible sum: ${highestSum}
  Elements added: ${arr.slice(sumIndex, sumIndex+k)}`);
}

highestConsecutiveSum([1,3,7,2,4,1],3);
highestConsecutiveSum([150, 200, 300, 7, 8, 1, 2, 8, 10], 3);