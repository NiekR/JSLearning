let myTodos = {
	day: 'Tuesday',
	meetings: 0,
	meetDone: 0,
	// Function inside an object will be called a method
	// No difference other than that

	addMeeting: function(){
		// this = everything in object
		console.log(this)
	}
}


let myTodosTwo = {
	day: 'Wednesday',
	meetings: 0,
	meetDone: 0,
	// Function inside an object will be called a method
	// No difference other than that

	// Call this.meeting to use param outside the scope
	addMeeting: function(num){
		// this = everything in object
		this.meetings = this.meetings + num
	},

	summary: function(){
		return `You got ${this.meetings} meetings today`
	}
}

// Call function like console.log object.function
console.log(myTodosTwo.summary())


let clearTodos = {
	day: 'Wednesday',
	meetings: 5,
	meetDone: 4,
	
	clearedMeetings: function(cleared){
		cleared = this.meetings - this.meetDone
		return `Cleared. You now have ${cleared} meetings`
	}
}

console.log(clearTodos.clearedMeetings())
