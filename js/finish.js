const WinWin = localStorage.getItem('OurWinner');
console.log(WinWin);

let winnerText = document.getElementById('winner_text');


winnerText.textContent = WinWin;

const Again = document.getElementById('retry');

Again.addEventListener('click', function() {
  let startAgain = './index.html';
  window.location.href = startAgain;
});