//-----------------------------1--------------------------------//

let arrA = new Array(+prompt('Tell me the length of the array?', 4));
let arrB = [];

//------------------------------2 and 3-----------------------------------//

metka:
for(let i = 0; i < arrA.length; i++) {
    arrA[i] = Math.floor(Math.random()*10);
    for (let j = 2; j < arrA[i]; j++) {
        if(arrA[i] % j == 0) {
            continue metka;
        }
    }
    arrB[i] = arrA[i];
}

document.write(arrA);

document.write(`<br/ >`);

arrB = arrB.filter(Boolean);
document.write(arrB);
document.write(`<br/ >`);

//------------------------------4--------------------------------------//

minValue = maxValue = arrB[0];

for(let n = 0; n < arrB.length; n++) {
    if(arrB[n] < minValue) {
        minValue = arrB[n];
    } else if (arrB[n] > maxValue) {
        maxValue = arrB[n];
    }
}

document.write(`Min value is ${minValue}`);
document.write(`<br/ >`);
document.write(`Max value is ${maxValue}`);