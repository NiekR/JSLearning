// Construtor
function Book(title, author, year) {
	console.log('Book initialized..')
	this.title = title;
	this.author = author;
	this.year = year;

	this.getSummaty = function() {
		return `${this.title} was written by ${this.author}
		in ${this.year}`
	}
}

// Instatiate an Object
const book1 = new Book('Book one', 'Jack White', '2014');
const book2 = new Book('Book two', 'Jack Bite', '2017');

console.log(book2)