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

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваше Фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

console.log(typeof(answers));
console.log(typeof(null));




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

const isChecked = false,
	isClose = false;

console.log(isChecked || !isClose);