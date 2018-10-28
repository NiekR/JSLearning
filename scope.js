// Scope is code inside { } 
// Var makes variable global from scope Let makes it local only inside scope

let iAmGlobal = 'value'

if (true) {
	var iamLocal = 'moreValue'
	iAmGlobal = 'superman'
	console.log(iAmGlobal);
	console.log(iamLocal);
}

console.log(iamLocal);
console.log(iAmGlobal);

