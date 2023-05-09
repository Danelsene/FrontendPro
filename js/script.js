function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

setInterval(() => {
  const block = document.querySelector('.block');
  block.style.backgroundColor = getRandomColor();
}, 500);

setInterval(() => {
  const block = document.querySelector('.block');
  const bodyWidth = window.innerWidth;
  const bodyHeight = window.innerHeight;
  const newLeft = Math.floor(Math.random() * bodyWidth);
  const newTop = Math.floor(Math.random() * bodyHeight);
  block.style.left = newLeft + 'px';
  block.style.top = newTop + 'px';
}, 1000);






