// 303 №1 
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent() {
// 	console.log(this.value); // что выведет? Ответ:text
// 	function child() {
// 		console.log(this.value); // что выведет? Ответ:ошибка
// 	}
// 	child();
// }

// 304 №1
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
//     let self = this;
// 	alert( square() );
// 	function square() {
// 		return self.value * self.value;
// 	}
//     square();
// }
// Ответ : Ошибка в потере контекста во вложенной функции


// 304 №2 
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
// 	alert( square(this) );
// 	function square(param) {
// 		return param.value * param.value;
// 	}
// }


// 304 №3 
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
// 	let square = () => {
// 		console.log(this.value * this.value)
// 	}
//     square();
// }


// 305 №1 
// "use strict";
// function func() {
// 	console.log(this.value);
// }
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);


// 305 №2
// "use strict";
// let elem = document.querySelector('#elem');
// let param1= 'John'
// let param2= 'Smit'
// function func(param1, param2) {
// 	console.log(this.value + ', ' + param1 + ' ' + param2);
// }
// func.call(elem, param1, param2);


// 306 №1 
// "use strict";
// let elem = document.querySelector('#elem');
// let surname = 'John'
// let name = 'Smit'
// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }
// func.apply(elem, [surname, name]);


// 307 №1 
// "use strict";
// let elem = document.getElementById('elem');
// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// let newFunc = func.bind(elem);
// newFunc('John', 'Smit');
// newFunc('Eric', 'Luis'); 