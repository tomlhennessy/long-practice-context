class CallCenter {
	constructor(name) {
		this.name = name;
	}

	sayHello() {
		console.log(`Hello this is ${this.name}`)
	}

	callMeLater(delay) {
		setTimeout(() => this.sayHello(), delay);
	} // arrow function to maintain context
}

// Manual testing
let judy = new CallCenter("Judy");
judy.sayHello(); // prints "Hello this is Judy"
judy.callMeLater(1000); // waits one second then prints


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
