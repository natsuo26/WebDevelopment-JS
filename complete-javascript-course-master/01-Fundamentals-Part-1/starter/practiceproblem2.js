let markMass, markHeight, johnMass, johnHeight;
console.log("test case 1:")
markMass = 78, markHeight = 1.69, johnMass = 92, johnHeight = 1.95;
let bmiMark = markMass / markHeight ** 2;
let bmiJohn = johnMass / johnHeight ** 2;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI: ${bmiMark}, is higher than John's BMI: ${bmiJohn}`);
}
else {
    console.log(`Mark's BMI: ${bmiMark}, is lower than John's BMI: ${bmiJohn}`);
}
console.log("test case 2:")
markMass = 95, markHeight = 1.88, johnMass = 85, johnHeight = 1.76;
bmiMark = markMass / markHeight ** 2;
bmiJohn = johnMass / johnHeight ** 2;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI: ${bmiMark}, is higher than John's BMI: ${bmiJohn}`);
}
else {
    console.log(`Mark's BMI: ${bmiMark}, is higher than John's BMI: ${bmiJohn}`);
}