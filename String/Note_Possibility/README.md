# **Is Ransom Note Possible**

Given two string, one representing letter in a ransom note and another letters in a magazine, determine if there are enough characters in magazine for the note.

## **Testing**

Run instructions:

In Javascript
```
node NotePossibility.js
```

Testing values
```js
console.log(isNotePossible('a','b') === false);
console.log(isNotePossible('aa','ab') === false);
console.log(isNotePossible('aa','aab') === true);
```