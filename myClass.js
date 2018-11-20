class User{
	constructor(firstname, middlename, lastname, credits){
		this.firstname  = firstname
		this.middlename = middlename
		this.lastname   = lastname
		this.credits    = credits
	}
	getFullName(){
		let fullname = `${this.firstname} ${this.middlename} ${this.lastname} is ma name`
		return fullname;
	}
	editName(newname){
		const myname = newname.split(',')
		this.firstname = myname[0]
		this.middlename  = myname[1]
		this.lastname  = myname[2]

	}

}

const peter = new User('Peter', 'Anderson',34)
//console.log(peter.getFullName());

peter.editName('Pieter,Jan,Andersom')

console.log(peter.getFullName());

const sammy = new User('Sammy', 'Samson',32)


