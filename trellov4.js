const myTodos = ['Buy bread', 'Go to gym', 'Record videos']

// If right element is not found -1 will be displayed
//console.log(myTodos.indexOf('Buy bread'));

const newTodos = [{
	title: 'Buy bread',
	isDone: false,
}, {
	title: 'Go to gym',
	isDone: false,
}, {
	title: 'Record videos',
	isDone: true,
},]

// Findindex makes it go through every todo index till it finds
// The todo.title in the return

const index = newTodos.findIndex(function(todo, index){
	// console.log(todo)
	return todo.title === 'Go to gym'
})

console.log(index)

// const findTodo = function(myTodos, title){
// 	const index = myTodos.findIndex(function(todo, index){
// 		return todo.title.toLowerCase() === title.toLowerCase()
// 	})
// 	return myTodos[index]
// }

// let printMe = findTodo(newTodos, 'go To gym')
// console.log(printMe)

const findTodo = function(myTodos, title){
	const titleReturned = myTodos.find(function(todo, index){
		return todo.title.toLowerCase() === todo.title.toLowerCase()
	})
	return titleReturned
}

let printMe = findTodo(newTodos, 'go To gym')
console.log(printMe)