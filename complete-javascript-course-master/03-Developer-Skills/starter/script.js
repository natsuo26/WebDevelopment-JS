// Remember, we're gonna use strict mode in all scripts now!
"use strict";
//npm install live-server -g
//live-server
// const xerolaz = 23;
// console.log(xerolaz);
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude=function(temps){
    // let minTemp=Math.min(temps);
    
    let max=temps[0];
    let min=temps[0];
    for(let i=0;i<temps.length;i++)
    {
        let curTemp=temps[i];
        if(curTemp>max) max=curTemp;
        if(curTemp<min) min=curTemp;
    }
    console.log(max);
    console.log(min);
    return max -min;
};

console.log(`the amplitude is: ${calcTempAmplitude(temperatures)}`);