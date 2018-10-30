// const day = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

// // console.log(day[0])


// // days.forEach(function (day, index)) {
// // 	console.log(`starts with ${index+1} -- ${day}`);
// // }

// // i = index
// // index++ = index = index+1

// for (let index = day.length - 1; index >= 0; index--) {
// 	console.log(day[index]);
// }


const myTodos = []

myTodos.push('Buy bread')
myTodos.push('Go to school')
myTodos.push('Meet with peter')

myTodos.forEach(function(todo, index){
	console.log(`Your task ${index} is: ${todo}`)

})