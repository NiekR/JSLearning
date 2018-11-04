let myTodos = {
	day: 'Monday',
	meetings: 0,
	meetDone: 0,
}

let addMeeting = function(todo, meet = 0){
	todo.meetings = todo.meetings + meet
}

let meetDone = function(todo, meetdone = 0){
	todo.meetDone = todo.meetDone - meetdone
}

let resetDay = function(todo){
	todo.meetings = 0
	todo.meetDone = 0
}

let getSummaryOfDay = function(todo){
	let meetLeft = todo.meetings + todo.meetDone
	return `You have ${meetLeft} of meetings left today`
}

addMeeting(myTodos, 6)

meetDone(myTodos, 5)

getSummaryOfDay(myTodos)



