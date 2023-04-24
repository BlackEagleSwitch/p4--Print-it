const slides = [
	{
		"image": "./assets/images/slideshow/slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "./assets/images/slideshow/slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "./assets/images/slideshow/slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "./assets/images/slideshow/slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const imgBanner = document.querySelector('.banner-img');
const tagBanner = document.querySelector('#banner p');
const right = document.querySelector('.arrow_right');
const left = document.querySelector('.arrow_left');
const dots = document.querySelector('.dots');

let nb = 0;

for (let slide of slides) {
	const dot = document.createElement('i');
	dot.className = "dot";
	dots.appendChild(dot);
}

const dot = dots.children;

function showFigure() {
	imgBanner.src = slides[nb].image;
	tagBanner.innerHTML = slides[nb].tagLine;
	dot[nb].classList.add('dot_selected');
}
showFigure();

left.addEventListener('click', () => {
	dot[nb].classList.remove('dot_selected');
	nb === 0 ? nb = nb - 1 + slides.length : nb = nb - 1;
	showFigure();
});

right.addEventListener('click', () => {
	dot[nb].classList.remove('dot_selected');
	nb === slides.length - 1 ? nb = nb + 1 - slides.length : nb = nb + 1;
	showFigure();
});