// const arr = [5,
    
//     5,
    
    
//         5];

// function ()) {

// }  
'use strict';

// alert('Hello'); предупреждение

// const result = confirm('Are you here?');
// console.log(result); согласие

// const answer = prompt('Вам есть 18,','18');
// console.log(answer); ответ от пользователя


// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше Фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// console.log(typeof(answers));
// console.log(typeof(null));




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


const category = 'toys';

console.log(`https://someurl.com/${category}/5`);


const user = 'Alex';

alert(`Привет, ${user}`);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

console.log('arr' + ' - object');
console.log(4 + +'5');

let incr = 10,
	decr = 10;

// ++incr;
// --decr;

console.log(++incr);
console.log(--decr);

console.log(5%2);

console.log(2 + 2 * 2 != 8); 
// == - сравнение, === - строгое сравнение (включает сравнение типов данных)

// && /* и */
// || /* или */
// ! - отрицание
// != - не равен

// const isChecked = false,
// 	isClose = false;

// console.log(isChecked || !isClose);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const num = 50;

// if (num < 49) {
// 	console.log('Error!');
// } else if (num > 100) {
// 	console.log('Много');
// } else {
// 	console.log ('Ok!');
// }


// const num = 50;

// (num === 50) ? console.log('Ok!') : console.log('Error');
// ? - if
// : - else


// const num = 50;

// switch (num) {
// case 49:
// 	console.log('Неверно');
// 	break;
// case 100:
// 	console.log('Неверно');
// 	break;
// case 50:
// 	console.log('Верно!');
// 	break;
// default:
// 	console.log('Не в этот раз :(');
// 	break;
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// const hamburger = 5;
// const fries = 0;

// if(hamburger && fries) {
// 	console.log('Я сыт!');
// }

// console.log((hamburger && fries));


// // 1
// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// if(hamburger >= 3 && cola && fries) {
// 	console.log('Все сыты!');
// } else {
// 	console.log('Мы уходим!');
// }


// // 2
// console.log(hamburger >= 3 && cola && fries);

// // 3
// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'sgsfgsfgth');


// // 4
// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if(hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
// 	console.log('Все довольны!');
// } else {
// 	console.log('Мы уходим!');
// }



// let johnReport, samReport, mariaReport = 'done';

// console.log(johnReport || samReport || mariaReport);


// console.log(!0);


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// let num = 50;

// while (num < 55) {
// 	console.log(num);
// 	num++;
// }


// let num = 50;

// do {
// 	console.log(num);
// 	num++;
// }
// while(num < 55);


// for(let i = 1; i < 8; i++) {
// 	console.log(i);
// }


// let num = 50;

// for(let i = 1; i < 8; i++) {
// 	console.log(num);
// 	num++;
// }


for(let i = 1; i < 10; i++) {
	if (i === 6) {
		break;
		// continue;
	}
	console.log(i);
}

// for (let i = 0; i < 3; i++) {
// 	console.log(i);
// 	for (let j = 0; j < 3; j++) {
// 		console.log(j);
// 	}	
// }


// // *
// // **
// // ***
// // ****
// // *****
// // ******

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

// 	for(let j = 0; j < i; j++) {
// 		result += '*';
// 	}

// 	result +='\n';
// }

// console.log(result);


first: for (let i = 0; i < 3; i++) {
	console.log(`First level: ${i}`);
	for (let j = 0; j < 3; j++) {
		console.log(`Second level: ${j}`);
		for (let k = 0; k < 5; k++) {
			if (k === 2) continue first;
			console.log(`Third level: ${k}`);
		}	
	}	
}


