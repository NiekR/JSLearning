// validation
function myValidation () {
	let myValue = document.getElementById('myform').value;

	// isNan = return true is argument is NotANumber 
	if (isNaN(myValue) || myValue < 1 || myValue > 20) {
		console.log('Not a valid input');
	} else {
		console.log('Valid input');
	}

}
