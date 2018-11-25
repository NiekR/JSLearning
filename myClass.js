class User{
	constructor(firstname, middlename, lastname, credits){
		this.firstname  = firstname
		this.middlename = middlename
		this.lastname   = lastname
		this.credits    = credits
	}
	getFullName(){
		let fullname = `${this.firstname} ${this.middlename} ${this.lastname} is ma name and i teach ${this.subject}`;
		return fullname;
	}
	editName(newname){
		const myname = newname.split(',')
		this.firstname = myname[0]
		this.middlename  = myname[1]
		this.lastname  = myname[2]

	}
}


// Inheritence
class Teacher extends User {
	// First line in in class with constructor which inhertis class 
	constructor(firstname, lastname, middlename, credits, subject){
		super(firstname, lastname, credits);
		this.subject    = subject;
	}
	
}

const peter = new Teacher('Peter','Pat', 'Anderson', 34, 'python')
//console.log(peter.getFullName());
//peter.editName('Pieter,Jan,Andersom')

console.log(peter.getFullName());

const sammy = new User('Sammy', 'Samson',32)


