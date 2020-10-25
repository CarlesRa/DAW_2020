const IMAGES = [
	"url('img/espacio1.jpg')" ,
	"url('img/espacio2.jpg')" ,
	"url('img/espacio3.jpg')" ,
	"url('img/espacio4.jpg')" ,
	"url('img/espacio5.jpg')" ,
	"url('img/espacio6.png')" ,
];
const LEFT = document.getElementById('left');
const CENTER = document.getElementById('center');
const RIGHT = document.getElementById('right');
const BTN_DETENER = document.getElementById('btn-detener');
const INTERVAL_TIME = 2000;

var interval;
var pointerLeft = 0;
var pointerCenter = 1;
var pointerRight = 2;



LEFT.style.backgroundImage = IMAGES[pointerLeft];
CENTER.style.backgroundImage = IMAGES[pointerCenter];
RIGHT.style.backgroundImage = IMAGES[pointerRight];

function next() {

	pointerLeft++;
	pointerCenter++;
	pointerRight++;

	if (pointerLeft == IMAGES.length) {
		pointerLeft = 0;
	}
	else if (pointerCenter == IMAGES.length) {
		pointerCenter = 0;
	}
	else if (pointerRight == IMAGES.length) {
		pointerRight = 0;
	}

	LEFT.style.backgroundImage = IMAGES[pointerLeft];
	CENTER.style.backgroundImage = IMAGES[pointerCenter];
	RIGHT.style.backgroundImage = IMAGES[pointerRight];

}

function prev() {

	pointerLeft--;
	pointerCenter--;
	pointerRight--;

	if (pointerLeft < 0) {
		pointerLeft = IMAGES.length -1;
	}
	else if (pointerCenter < 0) {
		pointerCenter = IMAGES.length -1;
	}
	else if (pointerRight < 0) {
		pointerRight = IMAGES.length -1;
	}

	LEFT.style.backgroundImage = IMAGES[pointerLeft];
	CENTER.style.backgroundImage = IMAGES[pointerCenter];
	RIGHT.style.backgroundImage = IMAGES[pointerRight];
}

function initCarousel() {
	interval = setInterval(next, INTERVAL_TIME);
	BTN_DETENER.disable = true;
} 

function stopCarousel() {
	window.clearInterval(interval);
}