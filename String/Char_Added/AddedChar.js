const addedChar = (s, t) => {
  const charObj = new Map();
  const sLength = s.length;
  let charAdded = 'No additions made';

  for (let i = 0; i <= sLength; i++) {
      charObj.set(t[i], (charObj.has(t[i]) ? charObj.get(t[i]) + 1 : 1));
    if (i === sLength) break;
    charObj.set(s[i], (charObj.has(s[i]) ? charObj.get(s[i]) + 1 : 1));
    if (i === sLength) break;
  }

  for(let i = 0; i < t.length; i++) {
      const char = t.charAt(i);
      if (charObj.get(char) % 2 === 1) {
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