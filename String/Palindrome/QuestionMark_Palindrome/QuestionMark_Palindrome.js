function createPalindrome(suppliedString) {
  let arrPalindrome = [];
  let palindrome = [];
  const a = 'a';

  for(let i = 0, j = suppliedString.length - 1; i <= j; i++) {
      arrPalindrome.push((suppliedString[i] + suppliedString[j]).match(/[^?]/g));      
    j--;
  }
  
  let i = 0, j = suppliedString.length - 1;
  for(let m of arrPalindrome) {
    if(m) {
      if (m.length > 1 && (m[0] !== m[1])) return 'NO';
      palindrome[i] = palindrome[j] = m[0];
    } else palindrome[i] = palindrome[j] = a;
    j--; 
    i++;
  }

  return palindrome.join('');
}

console.log(createPalindrome("?ab??a") === 'aabbaa');
console.log(createPalindrome("bab??a") === 'NO');
console.log(createPalindrome("?a?") === 'aaa');
console.log(createPalindrome("a?a") === 'aaa');
console.log(createPalindrome("?abc??a") === 'aabcbaa');
