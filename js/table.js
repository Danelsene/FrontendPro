const selectedImg = localStorage.getItem('selectedList');
console.log(selectedImg);


const arr = selectedImg.split(",");

console.log(arr); 

let table = document.createElement('table');
let button = document.createElement('button');
button.textContent = 'ФІНІШ';
button.classList.add('styled-finish');
button.id = 'finish'; 


arr.forEach(function(element) {
 
let row = table.insertRow();

  
let cell1 = row.insertCell();
  cell1.appendChild(document.createTextNode(element));

 
  let randomNum = Math.floor(Math.random() * 10) + 1;
  let cell2 = row.insertCell();
  cell2.appendChild(document.createTextNode(randomNum));
});


let maxNumber = 0;
let maxElement;
for (let i = 0; i < table.rows.length; i++) {
    let currentNumber = parseInt(table.rows[i].cells[1].innerText);
  if (currentNumber > maxNumber) {
    maxNumber = currentNumber;
    maxElement = table.rows[i].cells[0].innerText;
    localStorage.setItem('OurWinner', maxElement);
  }
}


console.log('Максимальний бал: ' + maxNumber);
console.log('Переможець: ' + maxElement);


document.body.appendChild(table);
document.body.appendChild(button);

const finishBtn = document.getElementById('finish');

finishBtn.addEventListener('click', function() {
  let finishPage = './page4.html';
  window.location.href = finishPage;
});