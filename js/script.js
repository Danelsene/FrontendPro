let a = +prompt('Enter first number', 1);
let b = +prompt(`Enter second number that should be bigger than ${a}`);
let h = +prompt(`Enter a step value that is bigger than 0`);
let sumOfFactorials = 0;

if (isNaN(a) || isNaN(b) || isNaN(h)){
  alert(`You entered not a number, please update the page and try again`);
} 

if (a > b){
  b = +prompt(`Your second number is smaller than first, enter your second number again(it should be bigger than ${a})`)
} 

if (h <= 0){
  h = +prompt(`Your step value is smaller than 0, please enter any other one bigger than 0`);
}

  for (let i = a; i <= b; i += h){
    let factorial = 1;
      for (let j = 2; j <= i; j++) {
        factorial *= j;
      }
    sumOfFactorials += factorial; 
  }
  console.log(sumOfFactorials);
  document.write(`Your sum of factorials equals ${sumOfFactorials}`)
