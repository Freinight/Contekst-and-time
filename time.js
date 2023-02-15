// 308 №1 
// "use strict";
// setInterval(function() {
// 	console.log('!');
// }, 3000);


// 309 №1 
// "use strict";
// let i = 100;
// setInterval(() => console.log(--i), 1000);


// 310 №1  
// "use strict";
// let i = 10;
// let timerId = setInterval(function() {
// 	console.log(--i);
// 	if (i <= 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);


// 311 №1 
// "use strict";
// let start = document.querySelector('#start');
// start.addEventListener('click', function() {
// 	let i = 100;
// 	setInterval(function() {
// 		console.log(--i);
// 	}, 1000);
// });


// 311 №2 
// "use strict";
// let start = document.querySelector('#start');
// start.addEventListener('click', function func() {
// 	let i = 100;
// 	setInterval(function() {
// 		console.log(--i);
// 	}, 1000);
// 	this.removeEventListener('click', func);
// });


// 312 №1  
// "use strict";
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	let i = 100;
// 	timerId = setInterval(function() {
// 		console.log(--i)
		// if (i <= 0){
		// 	clearInterval(timerId);
		// }
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// 312 №2 
// "use strict";
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// 312 №3 
// "use strict";
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// 312 №4 
// "use strict";
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// 312 №5 
// "use strict";
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });


// 312 №6 
// "use strict";
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.removeEventListener('click', function() {
// 	let i = 0;
// 	timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	let i = 0;
// 	timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
// });


// 313 №1 
// "use strict";
// Number (или '+') нужен, чтобы сложение происходило через числа, а не строки.


// 313 №2 
// "use strict";
// let elem = document.querySelector('#elem');
// setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
// }, 1000);


// 313 №3 
// "use strict";
// let elem = document.querySelector('#elem');
// let timerId = setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
// 		if (elem.value <= 0) {
// 		clearInterval(timerId);
// 	}
// },1000);


// 314 №1 
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	let self = this;
// 	setInterval(function() {
// 		self.value = Number(elem.value) + 1;
// 	}, 1000);
// });


// 314 №2 
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	setInterval(() => elem.value = Number(elem.value) + 1, 1000);
// });


// 314 №3 
// "use strict";
// let elem = document.querySelector('#elem');//создаём ссылку 
// elem.addEventListener('click', function() { // нажимаем
// 	setInterval((function(self) { // внешняя анонимная функция
// 		return function() { //внутренняя анонимная функция
// 			console.log(self.value);//выводит значение атрибута в консоль
// 		}
// 	})(this), 1000);// Таймер функции, работает каждую сек
// });


// 315 №1 
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	setInterval(function(self) {
// 		self.value--;
// 	}, 1000, this);
// });


// 316 №3
// "use strict";
// let start = document.querySelector('#start');
// let input = document.querySelector('#input');
// let timerId;
// start.addEventListener('click', function() {
//     timerId = setInterval(function() {
//         input.value = +input.value * +input.value;
// 	}, 1000);
// });


// 316 №4 
// "use strict";
// let p = document.querySelector('p');
// let input = document.querySelector('#input');
// let timerId;
// input.addEventListener('blur', function() {
//     p.textContent = input.value; 
//     timerId = setInterval(function() {
//         if(+p.textContent > 0 ){
//             p.textContent = +p.textContent - 1; 
//         }else{
//             	clearInterval(timerId);
//         }
// 	}, 1000);
// });


// 316 №5 
// "use strict";
// let p = document.querySelector('p');
// let start = document.querySelector('#start');
// let input = document.querySelector('#input');
// let timerId;
// start.addEventListener('click', function() {
//     p.textContent = input.value; 
//     timerId = setInterval(function() {
//         if(+p.textContent > 0 ){
//             p.textContent = +p.textContent - 1; 
//         }else{
//             	clearInterval(timerId);
//         }
// 	}, 1000);
// });


// 316 №6 
// "use strict";
// let p = document.querySelector('p');
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	let i = 1;
// 	timerId = setInterval(function() {
// 		p.textContent = i++;
// 	}, 1000);});
// stop.addEventListener('click', function(){
// 	clearInterval(timerId);
// });


// 316 №7 
// "use strict";
// let p = document.querySelector('p');
// let k = 0;
// setInterval(function(){
//     k++;
//     if(k % 2 == 0){
//         p.setAttribute('class','colored');
//     }else{
//         p.setAttribute('class','colorgreen');
//     }
// }, 1000)


// 316 №8 
// "use strict";
// let p = document.querySelector('p');
// setInterval(function(){
//     let date = new Date();
//     let num = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds(); 
//     p.textContent = num;
// })