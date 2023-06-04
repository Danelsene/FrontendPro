let container = document.getElementById('container');
let btn = document.getElementById('btn_ride');

btn.addEventListener('click', function() {
  for (let i = 0; i < 5; i++) {
    createImage(i * 1000); 
  }
});

function createImage(delay) {
  setTimeout(function() {
    let image = document.createElement('div');
    image.className = 'image';
    container.appendChild(image);

    animateImage(image);
  }, delay);
}

function animateImage(image) {
  let startX = 0; 
  let endX = container.offsetWidth; 
  let duration = 5000; 
  
  let start = null;
    function step(timestamp) {
      if (!start) start = timestamp;
      let progress = timestamp - start;
  
      let x = startX + (endX - startX) * (progress / duration);
      image.style.left = x + 'px';
  
      if (progress < duration) {
        window.requestAnimationFrame(step);
      } else {
        container.removeChild(image);
      }
    }
  
    window.requestAnimationFrame(step);
  }
  

  const seeTable = document.getElementById('btn_seeTable');

seeTable.addEventListener('click', function() {
  let TablePage = './page3.html';
  window.location.href = TablePage;
});