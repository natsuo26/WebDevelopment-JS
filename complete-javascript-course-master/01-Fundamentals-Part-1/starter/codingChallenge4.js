const billValue = 430;
let tip;
if (billValue >= 50 && billValue <= 300) {
    tip = 0.15 * billValue;
}
else {
    tip = 0.20 * billValue;
}
console.log(`The bill is ${billValue} tip on the bill is ${tip} so total value paid is ${billValue + tip}`);