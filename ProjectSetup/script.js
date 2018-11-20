// var h = document createElement('h1')

// // Textnode
// var myValue = document.createTextNode('Wattup')

// h.appendChild(myValue)

// document.querySelector('h1').appendChild(h)


// While
let val = 5;

var ul = document.getElementById('list')
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', removeItem);


while (val > 0) {
	// statement
	console.log(val)
    //val = val -1
	val--

}

function addItem(){
	var input = document.getElementById('input');
	var item = input.value;
	ul = document.getElementById('list');
	var Textnode = document.createTextNode(item)

	if (item === '') {
		return false
	} else{
       // create li, checkbox and label
       li = document.createElement('li');
       
       var checkbox = document.createElement('input')
       checkbox.type = 'checkbox';

       checkbox.setAttribute('íd', 'check');

       var label = document.createElement('label');
       label.setAttribute('for', 'item');

       //add elements to page
       ul.appendChild(label);
       li.appendChild(checkbox);
       label.appendChild(textnode);
       li.appendChild(label);

       // What to add, where to add it
       ul.insertBefore(li, ul.childNodes[0]);

       li.className = 'visual';

	}
}