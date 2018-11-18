// const myPElements = document.querySelector('p')
// myPElements.textContent = 'I am being changed using JS'

const myPElements = document.querySelectorAll('p')

// In arrow loop
myPElements.forEach(p => { p.textContent = 'I am being changed using a'});

// Select id & class
// console.log(document.getElementById('id'))


// QuerySelector(All)
const myElement = document.querySelectorAll('.class')

console.log(myElement[0])

// eventlistener button
// document.querySelector('button').addEventListener('click', (event) =>{
// 	event.target.textContent = 'Was clicked'
// })


// track input form
document.querySelector('#myform').addEventListener('input', (event)=>{
	console.log(event.target.value);
})