// Construtor
function Book(title, author, year) {
	console.log('Book initialized..')
	this.title = title;
	this.author = author;
	this.year = year;

}

// getSummary stored in __proto__ to not get summary for every book
Book.prototype.getSummary = function(){
		return `${this.title} was written by ${this.author}
		in ${this.year}`
};


// Call this value and arguments from other Method
function Magazine(title, author, year, month) {
	Book.call(this, title, author, year)

	this.month = month;
}

// Inhertit protype methods
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object
const mag1 = new Magazine('Mag one', 'Jack White', '2018', 'Jan')

console.log(mag1.getSummary);

// Use magazine constructor ipv book
Magazine.prototype.constructor = Magazine

console.log(mag1)