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
}

//getAge
Book.prototype.getAge = function() {
	const years = new Date().getFullYear() - this.year;
	return `${this.title} is ${years} year(s) old`
}

// Revise / Change Year
Book.prototype.revise = function(newYear) {
	this.year  = newYear;
	this.revise = true;
}

// Instatiate an Object
const book1 = new Book('Book one', 'Jack White', '2014');
const book2 = new Book('Book two', 'Jack Bite', '2017');

console.log(book2);
book2.revise('2018');
console.log(book2);
