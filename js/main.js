/*Take a look at Polyfill for functions such as forEach*/


console.log("Hello");
/*
const instance = basicLightbox.create(`
	<h1>Dynamic Content</h1>
	<p>You can set the content of the lightbox with JS.</p>
`);

instance.show()
*/
const instaImage = document.getElementsByClassName('slider');

const instaCards = document.querySelectorAll('.slider .card'); //Returns nodeList of Cards

//instaImage[0].innerHTML = 'Hello World';

//instaCards[0].innerHTML = 'CHANGED';

let iFrame = [];

instaCards.forEach( (card, index) => {
	//let instance;
	let instance = basicLightbox.create(document.querySelector(`#instance-${index}`));
	iFrame[index] = instance;
});


instaCards.forEach( (card, index) => {
	instaCards[index].addEventListener('click', function(card){
		card.preventDefault();
		console.log('I got clicked!');
		if(card.target.classList.contains('is-selected')){
			console.log("CLICKED SELECTED");
			//let instance = basicLightbox.create(document.querySelector('#existing'));
			//iFrame = document.querySelector('#existing');
			//const instance = basicLightbox.create(iFrame);
			//document.querySelector('.card').onclick = instance.show
			iFrame[index].show();
		}
		else{
			console.log("card.target");
		}
	});
});
