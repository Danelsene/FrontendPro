// let human = {
// 	name: this.name,
// 	age: this.age,
// 	constructor: function(name, age){
// 		return `My name is ${name} and I'm ${age} years old`
// 	},
// 	getConsole: function(){
// 		console.log(this);
// 	}
// }

// console.log(human.constructor('Baby', 14));
// console.log(human.getConsole());


class Human {
	constructor(name, age) {
	  this.name = name;
	  this.age = age;
	}
	getInfo() {
	  console.log(`Name: ${this.name}, Age: ${this.age}`);
	}
  }

  console.log(new Human("Mary", 35));
  

  class Car {
	constructor(brand, model, year, number, owner) {
	  this.brand = brand;
	  this.model = model;
	  this.year = year;
	  this.number = number;
	 	this.owner = owner;
	}
	getInfo() {
	  console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Number: ${this.number}`);
	  if (this.owner.age < 18) {
		console.log('Sorry, the owner should be older than 18');
	  } else {
		this.owner.getInfo();
	}
  	}
}
  
	const human1 = new Human('John', 25);
	console.log(human1);
	const human2 = new Human('Mary', 16);
	console.log(human2);
	const car1 = new Car('Toyota', 'Corolla', 2021, 'AB1234', human1);
	console.log(car1);
	const car2 = new Car('Honda', 'Civic', 2019, 'CD5678', human2);
	console.log(car2);


		car1.owner = human1;
		car2.owner = human2;
	
	car1.getInfo();
	car2.getInfo();