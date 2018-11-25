const student = {
	name: 'Peter',
	age: 23,
	isActive: true,
}


// convert object into a string to storage
const studentObjToString = JSON.stringify(student)

console.log(typeof studentObjToString)

localStorage.setItem('student', 'studentObjToString');

// Into json
const toJSONStudent = JSON.parse(studentObjToString);

console.log(typeof toJSONStudent)

// Display properties
console.log(toJSONStudent.age)