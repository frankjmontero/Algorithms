# **Form Palindrome**

Given a string with question marks (?) determine if a palindrome can be created replacing the marks with any alphabet letter. 

- If yes, create the palindrome.
- If not, return `NO`.

## **Testing**

Run instructions:

In Javascript
```
node QuestionMarkPalindrome.js
```

Testing values
```js
console.log(createPalindrome("?ab??a") === 'aabbaa');
console.log(createPalindrome("bab??a") === 'NO');
console.log(createPalindrome("?a?") === 'aaa');
console.log(createPalindrome("a?a") === 'aaa');
console.log(createPalindrome("?abc??a") === 'aabcbaa');
```