function createPalindrome(suppliedString) {

  let palindrome = [];
  let isPalindrome = true;
  let letters = 'a';
 
  for(let i = 0, j = suppliedString.length - 1; i <= j; i++) {

    if(suppliedString[i] === '?') {
      palindrome[i] = (suppliedString[j] === '?') ? letters : suppliedString[j];  
    } else palindrome[i] = suppliedString[i];
    
    if(suppliedString[j] === '?') {
      palindrome[j] = (suppliedString[i] === '?') ? letters : suppliedString[i];  
    } else palindrome[j] = suppliedString[j];
    j--;
  }

  for(let i = 0, j = palindrome.length - 1; i <= j; i++) {
    if (palindrome[i] !== palindrome[j]) {
      isPalindrome = false;
      break;
    }
    j--;
  }

  return (isPalindrome) ? palindrome.toString().replace(/,/g, '') : 'NO';
}

console.log(createPalindrome("?ab??a") === 'aabbaa');
console.log(createPalindrome("bab??a") === 'NO');
console.log(createPalindrome("?a?") === 'aaa');
console.log(createPalindrome("a?a") === 'aaa');
console.log(createPalindrome("?abc??a") === 'aabcbaa');
