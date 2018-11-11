// Review TrelloV4

//// Regular function
// const sayHello = function(name){
// 	return "Joo, " + name + " Watsup"
// }

// console.log(sayHello('Pieter'))


// Arrow function shortend to one line
const sayHello = (name) => `Hey ${name} !`

//console.log(sayHello('Pieter'));

const todos = [{
	title: 'Buy bread',
	isDone: true,
},{
	title: 'Go to gym',
	isDone: true,
},{
	title: 'Record videos',
	isDone: false,
}]

//Filter loops through object and give data matching your condition
const thingsDone = todos.filter((todo) => todo.isDone === true)

// Params in object w/ foreach
// thingsDone.forEach(todoo => console.log(todoo.title))


// No Arrow functions in object
const cameras = {
	price: 600,
	weight: 2000,
	brand: "Canon",
	myDescription: () => {
		return `This canon cameria is of ${this.price}$`
	}
}

console.log(cameras.myDescription())

