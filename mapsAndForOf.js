var peter = {
	name: 'I am peter',
	age: 24,
	isActive: true,

}

var marry = {
	name:'I am marry',
	age: 23,
	isActive: true
}

var sam = {
	name: 'I am sam',
	age: 25,
	isActive: false
}

let users = new Map()

// Type of data
 // console.log(typeof users)

// '' is the key, second is var 
users.set('peter', peter)
users.set('marry', marry)
users.set('sam',sam)

//console.log(users.size);

// iterableable something over with you can iterade/loop through

//console.log(users.get('sam'))

//console.log(users.keys())

// For of 
for (const value of users.values()){
 	console.log(value.name)
 }


// Use entries to use everything from array
for (const [key, value] of users.entries()){
 	console.log(`${key} = ${value.name}`)
}

// For each
users.forEach((value, key ) => console.log(`${key} = ${value.name}`))

var arrofArr = [['one', '1'], ['two', '2'], ['three', '3'],]

var newMap = new Map(arrofArr)

console.log(newMap)