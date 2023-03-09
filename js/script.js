let firstNumber = +prompt('Enter first number', 10);
let secondNumber = +prompt('Enter second number', 20);
let thirdNumber = +prompt('Enter third number', 30);
let average = (firstNumber + secondNumber + thirdNumber) / 3;

if(isNaN(firstNumber) || isNaN(secondNumber) || isNaN(thirdNumber)){
  alert(`You entered not a number, please update the page and try again`);
} else {
  alert(`The average of your numbers is ${average}`);
}



