const calcTip = (billValue) => {
  if (billValue >= 50 && billValue <= 300) {
    return 0.15 * billValue;
  } else {
    return 0.2 * billValue;
  }
};

const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tip = [];
const total = [];

for (let i = 0; i < bill.length; i++) {
  tip.push(calcTip(bill[i]));
  total.push(tip[i] + bill[i]);
}

console.log(`tips are ${tip}`);
console.log(`totals are ${total}`);

const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(`the average of total is: ${calcAverage(total)}`);
