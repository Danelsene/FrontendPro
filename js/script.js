var userName = prompt('Please, enter your name', "Mary");
var userSurname = prompt('Now, enter your surname', "Collins");

document.write(`<ul> <li>Full name: <b>${userName.trim()} ${userSurname.trim()}</b></li>`);

//----------------------------------//

var userEmail = prompt('Enter your email');

let email = userEmail.toLowerCase().replaceAll(" ", "");

if (email.indexOf("@") == -1) {
  document.write(`<li> Email: not valid email <b>${email}</b> (symbol @ not exist)</li>`);
} else if (email.indexOf("@") == 0) {
  document.write(`<li> Email: not valid email <b>${email}</b> (symbol @ find in first place)</li>`);
} else if (email.indexOf("@") == email.length - 1) {
  document.write(`<li> Email: not valid email <b>${email}</b> (symbol @ find in last place)</li>`);
} else {
  document.write(`<li> Email: ${email}</li>`);
}

//------------------------------------------------------------//

var userAge = prompt('Please, enter your year of birth', 1990);

let clearAge = userAge.replaceAll(" ", "");
let today = new Date().getFullYear();
let age = today - clearAge;
document.write(`<li>Age: <b>${age}</b> </li>`);







