// && - AND operator - Both sides need to be true
// || = OR operation - One side need to be true
// ! =  reversed operation

let isVerified = false
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true

if (!isVerified && isLoggedIn && hasPaymentToken) {
	console.log('greetings')
	console.log('granted acces to paid course')
} else if (isVerified || isGuest){
	console.log('Allow free preview')
} else {
	console.log('Please contact')
}
