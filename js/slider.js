//-----slider---//
const storedParticipantNumber = localStorage.getItem('participantNumber');
console.log(storedParticipantNumber);

const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const selectedImagesDiv = document.getElementById("selectedImages");
const randomNames = [
      'Michael Shumaher',
      'Alex Piper',
      'Mary Rider',
      'Vasil Ukrainian',
      'Dianochka',
      'Madison Cline',
      'George Clooney',
      'Bradley Cooper',
      'Misha Collins',
      'Jane Dou',
      'Clarissa',
      'Dan Perry',
      'Volodimir Zelensky',
      'Ronald Reygan',
      'Joe Biden',
      'Oliver Twist',
      'Jamie Lannister',
      'Cercei Lannister',
      'Deyneris Targarien',
      'John Snow',
      'Marcel Ginny',
      'Lady Gaga'
    ];

let currentIndex = 0; 


function showImage(index) {
  const images = slider.getElementsByTagName("img");

  
  if (index < 0) {
    currentIndex = images.length - 1;
  } else if (index >= images.length) {
    currentIndex = 0;
  }

  
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = "none";
    images[i].style.opacity = 1;
  }

  
  images[currentIndex].style.display = "block";
}


function nextImage() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = images.length - 1;
  }
  showImage(currentIndex);
}


function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}


nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);


showImage();



//----------catch------////
const selectedImages = [];

function getRandomName() {
  const randomIndex = Math.floor(Math.random() * randomNames.length);
  return randomNames[randomIndex];
}


function handleClick(event) {
  const image = event.target;
  const imageName = image.alt;

 
  if (selectedImages.length <= storedParticipantNumber && !selectedImages.includes(imageName)) {
    const randomName = getRandomName();
    selectedImages.push(`Car: ${imageName} -> Rider: ${randomName}`);
    selectedImagesDiv.innerHTML = selectedImages.join("<br>");
  } else {
    alert("You have already chosen this car");
  }
  localStorage.setItem('selectedList', selectedImages);

  image.style.opacity = 0.5;
}


const images = slider.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", handleClick);
}



//--------------------------------------------------------------------------//

const startRide = document.getElementById('start_ride');
const sliderSection = document.getElementById('slider_section');

startRide.addEventListener('click', function() {
  let CarRidePage = './page2.html';
  window.location.href = CarRidePage;
});