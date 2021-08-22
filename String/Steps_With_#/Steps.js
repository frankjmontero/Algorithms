const drawSteps = hight => {
  for (let i = 1, j = hight - 1; i <= hight; i++, j--) {
    console.log(`'${'#'.repeat(i)}${' '.repeat(j)}'`);
  }
}
drawSteps(5);