const drawPyramid = h => {
  const poundSign = '#', blank = ' ';
  
  for(let i = 0; i < h; i++) {
  	console.log(`'${blank.repeat(h-i-1)}${poundSign.repeat(i*2+1)}${blank.repeat(h-i-1)}'`);
  }
};

drawPyramid(3);