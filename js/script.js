var numberFirst = +prompt('Please, enter any number', 10);
var numberSecond = +prompt('Now, enter any other number', 20);
var sign = prompt('What do you want me to do with them?', '+ - * /')


  if (sign === '+') {
    let result = numberFirst + numberSecond;
    alert(`Your result is ${result}`);
    console.log(result);
  } else if (sign === '-') {
    result = numberFirst - numberSecond;
    alert(`Your result is ${result}`);
    console.log(result);
  } else if (sign === '*') {
    result = numberFirst * numberSecond;
    alert(`Your result is ${result}`);
    console.log(result);
  } else if (sign == '/') {
    result = numberFirst / numberSecond;
    alert(`Your result is ${result}`);
    console.log(result);
  } else {
    alert(`You made a mistake`);
    console.log(result);
  }
