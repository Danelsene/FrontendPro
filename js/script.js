let hours = +prompt('Enter number of hours?', 2);

while(isNaN(hours)) {
    alert(`You entered not a number, try again`)
    hours = +prompt('Enter number of hours?', 2);
}

let seconds = hours * 60 * 60;

alert(`There are ${seconds} seconds`);