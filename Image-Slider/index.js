let container = document.querySelector("#slider-container")
container.style.height = window.innerHeight + "px"

let currSlide = 0
let slides = document.querySelectorAll(".slide")
let dots = document.querySelectorAll(".dot")

function nextSlide() {
	if (currSlide >= slides.length - 1) {
		currSlide = 0
	} else {
		currSlide++
	}
	displaySlide()
}

function prevSlide() {
	if (currSlide <= 0) {
		currSlide = slides.length - 1
	} else {
		currSlide--
	}
	displaySlide()
}

function displaySlide(slide = currSlide) {
	// currSlide correction
	if (currSlide != slide) currSlide = slide

	// hide all slides
	for (let i = 0; i < slides.length; i++) {
		slides[i].style.display = "none"
		dots[i].classList.remove("selected")
	}

	// display current slide
	slides[slide].style.display = "block"
	dots[slide].classList.add("selected")
}

displaySlide()
