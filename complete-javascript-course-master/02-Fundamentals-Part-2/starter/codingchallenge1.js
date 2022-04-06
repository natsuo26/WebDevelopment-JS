const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};
const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} Vs. ${avgKoalas})`;
  } else if (avgKoalas > 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} Vs. ${avgDolphins})`;
  } else {
    return `no team wins!`;
  }
};

const avgDolphins = calcAverage(85, 54, 41);
const avgKoalas = calcAverage(23, 34, 27);

const result = checkWinner(avgDolphins, avgKoalas);
console.log(result);
