// Class with constructor
class Book {
	constructor(title, author, year) {
		this.year   = title;
		this.author = author;
		this.year   = year;
	}
}

// Subclass of magazine
class Magazine extends Book {
	constructor(title, author, year, month) {
		super(title, author, year);
		this.month = month;
	}

	getSummary() {
		return `${this.title} was written by ${this.author}
		in ${this.year} on ${this.month}`
	}
}

const mag1 = new Magazine('Mag one', 'Author', 'Year', '2018', 'Jan')

console.log(mag1.getSummary());
