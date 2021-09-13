const highestConsecutiveSum = (arr, k) => {
  highestSum = 0;
  sumIndex = 0;

  let sum = 0;
  
  for(let i = 0; i < arr.length; i++) {
    if (i < k) {
      sum += arr[i];
    } else sum = sum - arr[i-k] + arr[i];

    if(sum > highestSum) {
      highestSum = sum;
      sumIndex = i + 1;
    }
  }

  console.log(`  Highest possible sum: ${highestSum}
  Elements added: ${arr.slice(sumIndex - k, sumIndex)}`);
}

highestConsecutiveSum([1,3,7,2,4,1],4);
highestConsecutiveSum([150, 200, 300, 7, 8, 1, 2, 8, 10], 3);