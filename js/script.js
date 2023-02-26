var nameUser = prompt('Please, enter your name');

var approved = confirm('Are you sure?');

  if (nameUser !== ''){
    alert('Hello, ' + nameUser + '! How are you?');
  } else {
    alert('Hello stranger! How are you?' );
  }
