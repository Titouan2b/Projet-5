const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const arrowRight = document.querySelector(".arrow_right")
const arrowLeft = document.querySelector(".arrow_left")
const bannerImg = document.querySelector(".banner-img")
const bannerTxt = document.querySelector("#banner-txt")
let currentSlide = 0
const imgBaseUrl = "assets/images/slideshow/"
const dots = document.querySelector(".dots")

for(let i = 0; i < slides.length; i++){
  let p = document.createElement("p")
  p.setAttribute("class", "dot")
  dots.appendChild(p)
}

let dotsArray = document.querySelectorAll(".dot")

arrowRight.addEventListener("click", (event) => {
  currentSlide++
  if(currentSlide > 3){
    currentSlide = 0
  }
  bannerImg.src = imgBaseUrl + slides[currentSlide].image
  bannerTxt.innerHTML = slides[currentSlide].tagLine
  dotsArray.forEach((element, index) => {
    if(element.classList.contains("dot_selected") === true){
      element.classList.remove("dot_selected")
    }
    if(index === currentSlide){
      element.classList.toggle("dot_selected")
    }
  });
});

arrowLeft.addEventListener("click", () => {
  currentSlide--
  if(currentSlide < 0){
    currentSlide = slides.length - 1
  } 
  bannerImg.src = imgBaseUrl + slides[currentSlide].image
  bannerTxt.innerHTML = slides[currentSlide].tagLine
  dotsArray.forEach((element, index) => {
    if(element.classList.contains("dot_selected") === true){
      element.classList.remove("dot_selected")
    }
    if(index === currentSlide){
      element.classList.toggle("dot_selected")
    }
  });
});


function boucle(element, index) {
  if(element.classList.contains("dot_selected") === true){
    element.classList.remove("dot_selected")
  }
  if(index === currentSlide){
    element.classList.toggle("dot_selected")
  }
} 

console.log(boucle)


dotsArray.forEach((element, index) => {
  if(index === currentSlide){
    element.classList.toggle("dot_selected")
  }
});