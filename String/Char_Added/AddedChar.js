const addedChar = (s, t) => {
  const charObj = {};
  const sLength = s.length;
  let charAdded = 'No additions made';

  for (let i = 0; i <= sLength; i++) {
    charObj[t[i]] = (charObj.hasOwnProperty(t[i])) ? charObj[t[i]] + 1 : 1;
    charObj[s[i]] = (charObj.hasOwnProperty(s[i])) ? charObj[s[i]] + 1 : 1;
  }
  for (char in charObj) {
    if (charObj[char] % 2 === 1) {
      charAdded = char;
      return charAdded;
    }
  }

  return charAdded;
}

console.log(`addedChar('haslkjfhalwekjrhlasdk','haslkjfhalwdekjrhlasdk') = ${addedChar('haslkjfhalwekjrhlasdk','haslkjfhalwdekjrhlasdk')}`);
console.log(`addedChar('abcd','abcde') = ${addedChar('abcd','abcde')}`);
console.log(`addedChar('','y') = ${addedChar('','y')}`);
console.log(`addedChar('a','aa') = ${addedChar('a','aa')}`);
console.log(`addedChar('ae','aea') = ${addedChar('ae','aea')}`);
console.log(`addedChar('bfgh','fgbh') = ${addedChar('bfgh','fgbh')}`);