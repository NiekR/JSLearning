// Object of prototypes

const bookProtos = {
	getSummary: function() {
		return `${this.title} was written by ${this.author}
		in ${this.year}`
	},
	getAge: function() {
		const years = new Date().getFullYear() - this.year;
		return `${this.title} is ${years} year(s) old`
	}
}

// Create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book one';
// book1.author = 'Jack white';
// book1.year = '2010';

const book1 = Object.create(bookProtos, {
	title: { value: 'Book one'}
	auhtor: { value: 'Jack White'}
	year: { value: '2010'}
});



console.log(book1);

