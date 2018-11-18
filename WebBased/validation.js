const myPElements = document.querySelectorAll('p')

// validation
function myValidation () {
	let myValue = document.getElementById('myform').value;

	// isNan = return true is argument is NotANumber 
	if (isNaN(myValue) || myValue < 1 || myValue > 20) {
		myPElements.forEach(p => { p.textContent = 'Valid input of 0 - 20'});
	} else {
		myPElements.forEach(p => { p.textContent = 'Invalid input of greater than 20'});
	}

}

// form validation w/out url

document.querySelector('.myform').addEventListener('submit', (event)=>{
	event.preventDefault();
	console.log(event.target.username.value)
	console.log(event.target.firstname.value)
	event.target.username.value = ''
})
