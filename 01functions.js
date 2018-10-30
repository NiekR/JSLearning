// Declare function
let sayHello = function(name){
	console.log("Greeting message for user");
	console.log(`Hey ${name}`);
}

// Call function
//sayHello('Peter')

let fullNameMaker = function(firstname, lastname) {
	console.log('Welcome to LCO')
	console.log(`Happy to have you, ${firstname} ${lastname}`)
}

//fullNameMaker('Peter', 'De vries')


let myAdder = function(num1, num2){
	let added = num1 + num2
	return added
}

// let result = myAdder(3, 4)
// console.log(result);

let myMultiplier = function(num1, num2){
	return num1 * num2
}

let number = myMultiplier(5, 6)

console.log(number)


// Default parameters
let guestUser = function(name = 'noName', courseCount = 0){
	return 'Hello ' +  name  + ' your courscount is ' + courseCount
}

let guest = guestUser()
console.log(guest);
