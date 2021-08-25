const generatePalindrome = letterSet => {
  const charCount = {};
  const palindrome = [];
  let countSingleChar = 0;

  for(let i = 0; i < letterSet.length; i++) {
    if (letterSet[i] in charCount) {
      charCount[letterSet[i]]++;
      continue
    }
    charCount[letterSet[i]] = 1;
  }

  let i = 0, j = letterSet.length - 1;
  for (const letter in charCount) {
    if (charCount[letter] % 2 !== 0) {
      countSingleChar++;
      palindrome[~~[letterSet.length / 2]] = letter;
    }
    for (let m = 0; m < ~~((charCount[letter]/2)); m++) {
      palindrome[i++] = palindrome[j--] = letter;
    }
  }

  return (countSingleChar > 1) ? 'NO' : palindrome.join('');
};

console.log(generatePalindrome('hhanan') === 'hannah');
console.log(generatePalindrome('hhanannns') === 'hannsnnah');
console.log(generatePalindrome('nnddggtteerruujjtt') === 'ndgtterujjurettgdn');