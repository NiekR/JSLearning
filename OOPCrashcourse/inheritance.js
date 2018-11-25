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