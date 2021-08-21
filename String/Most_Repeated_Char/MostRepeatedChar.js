const mostUsedChar = s => {
  const charObj = {};
  let count = 0;
  let returnChar = '';

  for(let i = 0; i < s.length; i++) {
    charObj[s[i]] = (charObj.hasOwnProperty(s[i])) ? charObj[s[i]] + 1 : 1;
    
    if (charObj[s[i]] > count) {
      count = charObj[s[i]];
      returnChar = s[i];
    }
  }

  return returnChar;
}

console.log(mostUsedChar('aabklklbraarrrrrkkkllllllll') === 'l');