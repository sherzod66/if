

//DOM

//console.log(navigator.platform);





























//===============================================
//==============================================

/*const block = document.querySelector('ul>li');


block.onclick = scrollIntoView;

function scrollIntoView() {
	const sec = document.querySelector('section');
	sec.scrollIntoView({
		block: "center",
		inline: "nearest",
		behavior: "smooth"
	});
}


function aniScroll() {
	window.scrollTo({
		top: 1550,
		left: 0,
		behavior: "smooth"
	});
};
setTimeout(aniScroll, 1000);

let scrollWidth = Math.max(
	document.body.scrollWidth, document.documentElement.scrollWidth,
	document.body.offsetWidth, document.documentElement.offsetWidth,
	document.body.clientWidth, document.documentElement.clientWidth,
);

let scrollHeight = Math.max(
	document.body.scrollHeight, document.documentElement.scrollHeight,
	document.body.offsetHeight, document.documentElement.offsetHeight,
	document.body.clientHeight, document.documentElement.clientHeight,
);
console.log(scrollWidth);
console.log(scrollHeight);

*/
//const button = document.querySelector('.button');
//const firstcon = document.querySelector('.content');

/*button.addEventListener("click", event => {
	firstcon.classList.toggle('click');
});*/
/*
document.addEventListener("click", function (event) {
	if (event.target.closest('.button')) {
		firstcon.classList.toggle('click');
	} else if (!event.target.closest('.button')) {
		firstcon.classList.remove('click');
	}
})*/

console.log(navigator.platform)
const app = document.querySelector('.nav__app');
if (navigator.platform === 'Win32' || navigator.platform === 'Win64') {
	app.textContent = `Это винда`
} else if (navigator.platform === 'iPhone' || navigator.platform === 'iPad') {
	app.textContent = `Это `
} else if (navigator.platform === 'Android') {
	app.textContent = `Наш брат Androit`
}

const die = document.querySelector('.die');
const passNumber = document.querySelector('.die__number');
const passButton = document.querySelector('.die__item');


passButton.addEventListener("click", passClick);

/*for (let index = 0; index < passNumber.length; index++) {
	console.log(passNumber[index]);
}*/

const arr = [];


function passClick(event) {
	if (event.target.closest('.number')) {
		arr.push(event.target.textContent);
		let result = arr.join('', 4);
		console.log(arr);
		console.log(+result);
		passNumber.innerHTML = `${+result}`;
		removeDie();
	}
}

function removeDie() {
	if (passNumber.textContent === '1234') {
		die.remove()
	}
}