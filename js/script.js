
console.log(navigator.platform)
const app = document.querySelector('.nav__app');
if (navigator.platform === 'Win32' || navigator.platform === 'Win64') {
	app.innerHTML = `Это <i class="fa-brands fa-windows"></i>`
} else if (navigator.platform === 'iPhone' || navigator.platform === 'iPad') {
	app.textContent = `Это `
} else if (navigator.platform === 'Linux armv8l' && navigator.platform === 'Linux aarch64') {
	app.innerHTML = `Это <i class="fa-brands fa-android"></i>`
}
const die = document.querySelector('.die');
const passNumber = document.getElementsByClassName('die__number')[0];
const passButton = document.querySelector('.die__item');
const circle = document.querySelectorAll('.circle');
const ExaminationNum = document.querySelectorAll('.die__num');
const circleFirst = document.querySelector('._one');
const circleTwo = document.querySelector('._two');
const circleThree = document.querySelector('._three');
const circleFour = document.querySelector('._four');
const nav = document.querySelector('.nav');
const lock = document.querySelector('.hidden');
const audio = new Audio('./sound/knopka.mp3');
const lockSound = new Audio('./sound/lockSound.mp3');
console.log(passNumber);

passButton.addEventListener("mousedown", passClick);


const arr = [];
const circleArray = [];
const passwordNumber = [
	{ password: 1234, }
];

function passClick(event) {
	if (event.target.closest('.number')) {
		audio.play();
		if (arr.length < 4) {
			arr.push(event.target.textContent);
			circleArray.push('1');
		}
		let result = arr.join('');
		console.log(arr);
		console.log(+result);
		console.log(circleArray);
		ExaminationNum.textContent = `${+result}`;
		showCircle();
		removeDie();
	} else if (event.target.closest('.die__icon')) {
		arr.splice(-1, 1);
		circleArray.splice(-1, 1);
		if (circleArray.length < 1) {
			circleFirst.classList.remove('yellow')
		} else if (circleArray.length < 2) {
			circleTwo.classList.remove('yellow')
		} else if (circleArray.length < 3) {
			circleThree.classList.remove('yellow')
		} else if (circleArray.length < 4) {
			circleFour.classList.remove('yellow')
		}
	}
}

function removeDie() {
	if (passwordNumber[0].password === +ExaminationNum.textContent) {
		setTimeout(function () {
			die.classList.add('_remove');
			lock.classList.add('_open')
		}, 300)
		setTimeout(function () {
			arr.splice(0, arr.length);
			circleArray.splice(0, circleArray.length);
			circleFirst.classList.remove('yellow');
			circleTwo.classList.remove('yellow');
			circleThree.classList.remove('yellow');
			circleFour.classList.remove('yellow');
		}, 500)
		nav.classList.add('_active');
		document.body.style.cssText = 'background-color: rgb(189, 97, 97);'
	}
	else {
		if (arr.length === 4) {
			setTimeout(function () {
				arr.splice(0, arr.length);
				circleArray.splice(0, circleArray.length);
				circleFirst.classList.remove('yellow');
				circleTwo.classList.remove('yellow');
				circleThree.classList.remove('yellow');
				circleFour.classList.remove('yellow');
				passNumber.classList.add('animation');
				lock.classList.add('animation');
			}, 200)
		} else {
			passNumber.classList.remove('animation')
			lock.classList.remove('animation');
		}
	}
}
function showCircle() {
	if (circleArray.length == 1) {
		circleFirst.classList.add('yellow')
	} else if (circleArray.length == 2) {
		circleTwo.classList.add('yellow')
	} else if (circleArray.length == 3) {
		circleThree.classList.add('yellow')
	} else if (circleArray.length == 4) {
		circleFour.classList.add('yellow')
	}
}

lock.addEventListener("click", function (event) {

	if (event.target.closest('._open')) {
		lockSound.play()
		lock.classList.remove('_open');
		nav.classList.remove('_active');
		die.classList.remove('_remove');
		document.body.style = '';
	}
});

function sound() {
	audio.play();
}
