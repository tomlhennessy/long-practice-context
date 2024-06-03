class Car {
	constructor() {
		this.speed = 0; // Initialise speed to 0
	}

	drive(newSpeed) {
		this.speed = newSpeed; // Set the new speed
		return this.speed;
	}
}

// Manual testing
let car = new Car();
console.log(car.drive(0)); // => returns 0
console.log(car); // { speed: 0 }

console.log(car.drive(10)); // => returns 10
console.log(car); // { speed: 0 }

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Car;
} catch {
	module.exports = null;
}
