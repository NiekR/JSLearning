// every

var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Com,paq', ram: 20 },
    { name: 'Acer', ram: 18 }
];

var computer = computers.every(function (computer) {
    return computer.ram > 16;
});

console.log(computer);

// some
computers.some(function (computer) {
    return computer.ram > 16;
});

// simplified..
var names = [
    "Alexandria",
    "Matthew",
    "Joe"
];

names.every(function (name) {
   return name.length > 4;
});


names.some(function (name) {
    return name.length > 4;
});

// real life cases
function Field(value) {
    this.value = value;

}


// Prototype =
Field.prototype.validate = function () {
    return this.value.length > 0;
};

var username = new Field("2cool");
var password = new Field("");
var birthdate = new Field("10/10/2010");

var fields = [username, password, birthdate];

var formIsValid = fields.every(function (field) {
    return field.validate();

});

if (formIsValid) {
    alert('valid');
} else {
    alert('error');
}



