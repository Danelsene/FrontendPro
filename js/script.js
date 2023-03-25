//-----------------------------1--------------------------------//
let arrayFirst = [];
for ( let i = 10; i <= 20; i++){
    arrayFirst.push(i);
}

document.write(arrayFirst);

//------------------------------2------------------------------------//

let arraySecond = [];

for ( let i = 10; i <= 20; i++){
    arraySecond.push(i * i);
}

document.write(`<br /> ${arraySecond}`);
document.write("<br />")


//------------------------------3--------------------------------------//

// let arrayThird = [];

// for (i = 1; i <= 10; i++) {
//     arrayThird[i] = [];
//     for (j = 1; j <= 2; j++) {   
//         if(j == 1){
//             arrayThird[i][j] = i;
//         } else if (j == 2) {
//             arrayThird[i][j] = i * 7;
//         }
//         document.write(arrayThird[i][j] + "&nbsp;&nbsp;");
       
//     }
//     document.write("<br />")
// } 
// document.write(
//     `<table>
//         <tr>
//             <td>1</td>
//             <td>7</td>
//         <\tr>
//         <tr>
//             <td>2</td>
//             <td>4</td>
//         <\tr>
//     </table>`)



let arrayThird = [];
document.write('<table style = "border-collapse: collapse; text-align: center;">')

for (let i = 1; i <= 10; i++) {
    document.write('<tr style ="border: 1px solid black; padding: 3px;">')
    arrayThird[i] = [];
    for (let j = 1; j <= 2; j++) {
        if (j == 1){
            document.write(`<td style ="border: 1px solid black; padding: 3px;">${arrayThird[i][j] = i * j}</td>`)
        } else if (j == 2){
            document.write(`<td style ="border: 1px solid black; padding: 3px;">${arrayThird[i][2] = i * 7}</td>`)
        }
    }
    document.write('</tr>')
}
document.write('</table>')

//----------------------------------------4-----------------------------------------//

let sumFirst = 0;

for ( let i = 1; i <= 15; i++){
    sumFirst += i;
}

document.write(` <br /> ${sumFirst}`)


//----------------------------------------5-------------------------------------------//

let sumSecond = 1;

for ( let i = 15; i <= 35; i++){
    sumSecond *= i;
}

document.write(` <br /> ${sumSecond}`)

//-----------------------------------------6--------------------------------------------//

let sumThird = 0;

for ( let i = 1; i <= 500; i++){
    sumThird += i;
}

let average = sumThird / 500;

document.write(` <br /> ${average}`)

//-----------------------------------------7-----------------------------------------------//

let sumFourth = 0;

for ( let i = 30; i <= 80; i++){
    if(i % 2 == 0){
        sumFourth += i;
    }
}

document.write(` <br /> ${sumFourth}`)

//------------------------------------------8---------------------------------------------------//

let arrayFourth = [];

for ( let i = 100; i <= 200; i++){
    if(i % 3 == 0){
        arrayFourth.push(i)
    }   
      
}
document.write(` <br /> ${arrayFourth}`)

//------------------------------------------9---------------------------------------------------//

let arrayFifth = [];

let n = 15; //---наше будь-яке число

for ( let i = 1; i <= n; i++){
    if (n % i == 0){
        arrayFifth.push(i);
    }
}
document.write(` <br /> ${arrayFifth}`);

//---------------------------------------------10-------------------------------------------------//

let arraySixth = [];

let k = 12; //---наше будь-яке число

for ( let i = 1; i <= k; i++){
    if (k % i == 0){
        if(i % 2 == 0){
        arraySixth.push(i);
        }
    }
}
document.write(` <br /> ${arraySixth}`);

//--------------------------------------------------11------------------------------------------------//

let sumFifth = 0;

let t = 12; //---наше будь-яке число

for ( let i = 1; i <= t; i++){
    if (t % i == 0){
        if(i % 2 == 0){
        sumFifth += i;
        }
    }
}
document.write(` <br /> ${sumFifth}`);
document.write("<br />")

//------------------------------------------------------12-------------------------------------//

let arr = [];
document.write('<table style = "border-collapse: collapse; text-align: center;">')

for (let i = 1; i <= 10; i++) {
    document.write('<tr style ="border: 1px solid black; padding: 3px;">')
    arr[i] = [];
    for (let j = 1; j <= 10; j++) {
            document.write(`<td style ="border: 1px solid black; padding: 3px;">${arr[i][j] = i * j}</td>`)
    }
    document.write('</tr>')
}
document.write('</table>')
