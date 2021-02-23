/*Take a look at Polyfill for functions such as forEach*/

const instaImage = document.getElementsByClassName('slider');

const instaCards = document.querySelectorAll('.slider .card'); //Returns nodeList of Cards

let iFrame = [];

instaCards.forEach( (card, index) => {
	let instance = basicLightbox.create(document.querySelector(`#instance-${index}`));
	iFrame[index] = instance;
});


instaCards.forEach( (card, index) => {
	instaCards[index].addEventListener('click', function(card){
		card.preventDefault();
		console.log('I got clicked!');
		if(card.target.classList.contains('is-selected')){
			console.log("CLICKED SELECTED");
			iFrame[index].show();
		}
		else{
			console.log("card.target");
		}
	});
});

//Execute scrollFunction on scroll
window.onscroll = function() { scrollFunction() };

let navbar = document.getElementsByClassName('navbar')[0];
console.log(navbar)
//Get offset position of navbar
//let sticky = navbar.offsetHeight;

//Add sticky class top navbar once it reaches scroll position. Remove when leaving.
function scrollFunction(){
	if(window.pageYOffset >= 600){
		navbar.classList.add('sticky-navbar', 'drag-down');
	}
	else{
		navbar.classList.remove('sticky-navbar', 'drag-down');
	}
}
