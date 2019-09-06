/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

function carousel() {
  const carousel = document.createElement("div")
  carousel.classList.add("carousel")
  const buttonleft = document.createElement("div")
  buttonleft.classList.add("left-button")
  const buttonright = document.createElement("div")
  buttonright.classList.add("right-button")
  const image1 = document.createElement("img")
  const image2 = document.createElement("img")
  const image3 = document.createElement("img")
  const image4 = document.createElement("img")

  carousel.appendChild(buttonleft)
  carousel.appendChild(buttonright)
  carousel.appendChild(image1)
  carousel.appendChild(image2)
  carousel.appendChild(image3)
  carousel.appendChild(image4)

  image1.src = "assets/carousel/mountains.jpeg"
  image2.src = "assets/carousel/computer.jpeg"
  image3.src = "assets/carousel/trees.jpeg"
  image4.src = "assets/carousel/turntable.jpeg"

  image1.classList.add("images")
  image2.classList.add("images")
  image3.classList.add("images")
  image4.classList.add("images")

  buttonleft.addEventListener("click", e=>{
    controls(-1)
  })
  buttonright.addEventListener("click", e=>{
    controls(1)
  })

  return carousel
}

carouselContainer = document.querySelector(".carousel-container")
carouselContainer.appendChild(carousel())




  
var slideIndex = 1
showSlides(slideIndex)

function controls(n){
  showSlides(slideIndex += n)
}

function showSlides(n){
  let i;
  let slides = [...document.getElementsByClassName("images")]
  console.log(slides)
  if (n>slides.length) {
    slideIndex = 1
  }
  if (n<1){
    slideIndex = slides.length
  }
  for (i=0; i<slides.length; i++){
    slides[i].style.display = "none"
  }
  slides[slideIndex-1].style.display = "block"
}


