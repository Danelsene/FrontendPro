
const startButton = document.getElementById('start');
const rallyMenu = document.getElementById('rallymenu');

startButton.addEventListener('click', function() {
  rallyMenu.style.visibility = 'visible';
});

//----------------------------------------form------------------------------------//

const form = document.getElementById('myForm');
    const participantQuantity = document.getElementById('participantQuantity');
    const formButton = document.getElementById('formButton');
    
    
    formButton.addEventListener('click', function(event) {
      event.preventDefault(); 

      var enteredNumber = parseInt(participantQuantity.value, 10);

      if (enteredNumber >= 2 && enteredNumber <= 14) {
        localStorage.setItem('participantNumber', enteredNumber);
        let sliderPage = './page1.html';
        window.location.href = sliderPage;
        console.log(enteredNumber);
      } else {
        alert("Введене число не входить у діапазон від 2 до 14");
      }
    });

    


   
