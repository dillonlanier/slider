/****************************************************
* JavaScript for slider demo 
* Written by Dillon Lanier 
****************************************************/
const nextBtn = document.querySelector(".next-nav");
const prevBtn = document.querySelector(".prev-nav");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".navlinks");
const numberOfSlides = slides.length;
var slideNumber = 0; 
slideIcons.forEach((icon) => {
	icon.addEventListener("click", () => {
		slides.forEach((slide) => {
			slide.classList.remove("active");
		});
		slideIcons.forEach((icon) => {
			icon.classList.remove("active");
		});
		slideNumber = icon.id[5];
		slides[slideNumber].classList.add("active");
		icon.classList.add("active");
		window.scrollBy(0,100);
	});
});
nextBtn.addEventListener("click", () => {
	slideNumber++;
	if(slideNumber > (numberOfSlides - 1)){
		slideNumber = 0;
	}
	slideIcons[slideNumber].click();
});
prevBtn.addEventListener("click", () => {
	slideNumber--;
	if(slideNumber < 0){
		slideNumber = numberOfSlides - 1;
	}
	slideIcons[slideNumber].click();
});