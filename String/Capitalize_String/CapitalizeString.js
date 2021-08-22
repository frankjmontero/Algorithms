const capitalize = (s) => {
  const arrChar = s.split('');
  for (let i = 0; i < arrChar.length; i++) {
    if (i === 0 || arrChar[i - 1] === ' ') {
      arrChar[i] = arrChar[i].toUpperCase();
    }
  }
  return arrChar.join('');
};

console.log(capitalize('a long trip') === 'A Long Trip');