let userEmail = 'abc'
let password  = '1234!a'

// console.log(password.length)
// Method needs () function does not
// console.log(userEmail.toUpperCase())


// Includes
let userCheck = function(myString){
	if ((myString.includes(123)) && (myString.length > 6)){
		return true
	} else {
		return false
	}
}

// console.log(userCheck(userEmail))

let passChecker = function(pass){
	if ((pass.includes(123)) && (pass.length > 6)){
		return true
	} else {
		return false
	}
}

console.log(passChecker(password))