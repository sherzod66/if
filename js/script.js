//Урок №1
//console.log("Hello world!");

//================================
//Урок №2
//console.log("Учим");
//console.log("Js");

/* Значения
Есть несколько типов значенией (values):
фкисированное значение (литералы), значения констант
изначения переменных
*/

//Примеры литералов
/*
25									//Литерал целого числа
23.8								//литерал дробного числа
'JavaScript'						//Литерал строки
"JavaScript"						//Литерал строки
[]									//Литерал массива
[1, 324, 342,]						//Литерал массива
{}									//Литерал объекта
{
	name: "Sherzod",
	surname: "Живи диши все будет от души"
}									//Литеррал объекта

(ab|bc)								//Литерал регулярного выражения
//В языках програмирования константы и переменные используются
//для хранения данных
const maxValue = 18; 				//Константа
var section = "JS";					//пременная
let arr = ['HTml', 'CSS', 'js'];	//переменная
*/
//==============================================================
//Урок №3


/*var prompt = prompt("Число", "");

let message = prompt;

message >= 0 ? console.log(message) : console.log("Вы вели не число меньше нуля!");
*/
/*if (message >= 0) {
	console.log(message);
} else {
	console.log("Вы вели не число меньше нуля!")
}

*/
/*let message = (92 > '11' && 58 < 100) ? 'Истина' : 'Ложь!'
console.log(message)*/
//Урок №4 циклы

//while

/*let num = 0;
for (num < 100) {
	console.log(num);
	num++
}*/

//for
//for (Начало; Условие; шаг);
//const h1 = document.querySelectorAll('div');
/*console.log(h1[2]);
h1.forEach(item => {
})*/
/*let num = 8;
while (num) {
	console.log(num);
	num--;
}*/

/*let number = 0;
while (number < 3) {
	console.log(`Число рана = ${number}`);
	number++;
}
*/

/*FirstFor: for (let num = 0; num < 2; num++) {
	for (let size = 0; size < 3; size++) {
		if (num == 1) {
			break FirstFor
		}
		console.log(size)
	}
}*/

/*let id = Symbol("id")
let userInfo = {
	name: 'Sherzod',
	age: 18,
	'Java Script': true,
	[id]: 1,
};
console.log(userInfo);
console.log(userInfo['Java Script']);

let key = "name";
console.log(userInfo[key]);*/
/*
let userInfo = {
	name: 'Sherzod',
}
userInfo.age = 18;
console.log(userInfo);

userInfo.address = {
	sity: "Узбекистан",
	street: "Турсунова",
}
console.log(userInfo);
let user = Object.assign({}, userInfo);

user.age = 17;
console.log(user)

if ("name" in user || "age" in user) {
	console.log(user.name || user.age);
} else {
	console.log("error");
}*/

//цикл for in перебор объектов

/*for (let key in object) {
	//Тело цикла выполняется для каждого свойства объекта
}*/

/*let userInfo = {
	name: 'Sherzod',
	age: 18,
	adress: {
		city: "Узбекистан",
		street: "Турсунова",
	}
};

for (let key in userInfo) {
	console.log(key);
	console.log(userInfo[key]);
}
for (let key in userInfo.adress) {
	console.log(key);
	console.log(userInfo.adress[key]);

}*/

/*function UserInfo(name, age) {
	this.name = name;
	this.age = age;
}

console.log(new UserInfo('Шерзод', 18));
console.log(new UserInfo('Давлат', 18));
console.log(new UserInfo('Амир', 17));*/
/*
let num = 'Привет';

for (let text of num) {
	console.log(text);
}

let ob = {
	name: 'sherzod',
	['last name']: 'sadillaev',
};


for (let info in ob) {
	console.log(info);
	console.log(ob[info]);
}*/
/*
let text = "Живи а работай в свободное время!";
let first = text[0];
let last = text[text.length - 1];
console.log(text.length);
console.log(first);
console.log(last);

const array = []
for (let char of text) {
	console.log(array)
}*/

//Изменение регисира
/*
let text = "Привет";
console.log(text.toUpperCase());//Верхний регистр
console.log(text.toLowerCase());//Нижний регистр*/

//indexOf ишет подстороку

/*var text = "Привет";
var serchText = "рИвЕт";
//console.log(text.toLowerCase().indexOf(serchText.toLowerCase()));
console.log(text.search(serchText));*/
/*
let text = "Привет";
let arr = [];

for (let change of text) {
	arr.push(change.toLowerCase());
}
console.log(arr);
arr.splice(1, 0, "shezod");
arr.splice(-1, 1, "amir");
console.log(arr);
*/

//slice создает новый массив в котрый копирует часть либо весь массив
/*
let arrOne = ['Ваня', 'Исштван', 'Оля',];
console.log(arrOne);
let arrTwo = arrOne.slice(1, 2);
arrTwo.splice(1, 0, "Sherzod");
console.log(arrTwo);*/

//Метод concat.
//создает новый массив в который копирует данные из других массивов
/*
let arrOne = ['Ваня', 'Исштван', 'Оля',];
console.log(arrOne);

let arrTwo = arrOne.concat('Петя'); //пется добавится в конец массива
console.log(arrTwo);*/

//Поиск в массиве find и findIndex
/*
let arr = [
	{ name: 'Sherzpd', age: 18 },
	{ name: 'Amir', age: 19 },
	{ name: 'Amir', age: 'I will not say' },
]
//item- это сам элемент массива,
//index- ключь позиция
//array - весь массив
let resultOne = arr.find(function (item, index, array) {
	return item.age == 18;
});

console.log(resultOne);

let resultTwo = arr.findIndex(item => item.age == 'I will not say');
console.log(resultTwo)*/
/*
let arrOne = ["Sherzod", "Amir", "Davlat"];
console.log(arrOne);
console.log(arrOne.sort());//Сортирует по алфовиту
console.log(arrOne.reverse());//Сортирует наоборот

let arrTwo = [22, 18, 9];

console.log(arrTwo.sort((a, b) => a - b));*/
/*
let arrOne = ["Sherzod", "Amir", "Davlat"];

let result = arrOne.map((item, index, array) => {
	return item[0]
});
console.log(result);*/


//Преоброзование объекта
/*
метод split преобразует строку в
массив по заданному разделителю
синтаксис: str.split(delitel)
*/
/*
let str = "Sherzod,Davlat,Amir,Khakim,Amon";

let arr = str.split(',', 4);
console.log(arr.sort());

let result = arr.join(' ');
console.log(result)*/

//Перебор массива
/*
let arr = ["Sherzod", "Amir", "Davlat"];

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}*/
/*
let arr = ["Sherzod", "Amir", "Davlat"];

arr.sort().forEach((item, index, array) => {
	console.log(`${item} находится на ${index} позиция ${array}`);
})*/

/*let arr = ["Sherzod", "Amir", "Davlat"];

for (let key = 0; key < arr.length; key++) {
	const arrFor = arr[key];
	console.log(arrFor);
}*/

/*
const arr = [1, 2, 3, 5, 6];
const arrReduce = arr.reduce(function (previousValue, item, index, array) {
	return item + previousValue
}, 0);

console.log(arrReduce);

const data = ["Sherzod", "Amir", "Davlat"];


const deleteArray = data.splice(0, 1);
console.log(data);

console.log(deleteArray.join(''));*/


/*
const iconArr = ["Sherzod", "Amir", "Davlat"];

for (let index = 0; index < iconArr.length; index++) {
	const result = iconArr[index];
	console.log(result)
}

iconArr.forEach((item, index, array) => {
	console.log(item)
})*/


//===============================================================
//===============================================================

//DOM

//console.log(navigator.platform);

const text = document.getElementsByClassName('list')[0];

const renameText = text.innerHTML;



//outerHTML


function random() {
	let num = Math.random();
	return Math.round(num * 105);
}

var fly = document.getElementsByClassName('fly')[0];


var arr = [];



fly.addEventListener("click", function () {
	arr.push(1);
	fly.style.cssText = `
	position: absolute;
	top: ${random()}%;
	left: ${random()}%;
	`
	fly.textContent = '';
	const arrReduce = arr.reduce(function (previousValue, item, index, array) {
		return item + previousValue;
	}, 0);
	text.innerHTML = `Счет: ${arrReduce}`;
});


/*let val = 100;

const arr = ['50%', '100%', '90%', '101%'];

if (arr.includes(val) > '100%') {
	console.log('Нашлось')
}

//console.log(arr.includes(val));

const arr = [50, 100, 90, 101, 1002];

let result = arr.includes(100);
arr.forEach(item => {
	if (item > 99) {
		console.log("True")
	}
})


//findIndex(item => item == 100);
console.log(result)
*/
