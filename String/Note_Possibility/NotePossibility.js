const isNotePossible = (ransomNote, magazine) => {
  const charObj = new Map();
  const mLength = magazine.length;

  for (let i = 0; i < mLength; i++) {
    const char = magazine[i];
    charObj.set(char, (charObj.has(char) ? charObj.get(char) + 1 : 1));
  }

  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (charObj.has(char)) {
      charObj.set(char, charObj.get(char) - 1);
    } else return false;

    if (charObj.get(char) < 0) return false;  
  }
  return true;
}

console.log(isNotePossible('a','b') === false);
console.log(isNotePossible('aa','ab') === false);
console.log(isNotePossible('aa','aab') === true);