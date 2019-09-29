// destructuring
var expense = {
  type: 'Business',
  amount: '45 dollah'
};

// var type = expense.type;
// var amount = expense.amount;

// es6 way
const { type, amount } = expense;


//2
var savedFiled = {
  extension: 'jpg',
  name: 'repost',
  size: 1404
};

function fileSummary({ name, extension, size }) {
  return `The file ${name}.${extension}. is size of ${size}`
}

fileSummary(savedFiled);

// destructuring arrays
const companies = [
    'Google',
    'Facebook',
    'Uber'
];

const [ name ] = companies;
name;

// arrays and object combined
const companies2 = [
  { name: 'Google', location: 'Mountain view'},
  { name: 'FB', location: 'PARAK'},
  { name: 'Uber', location: 'san fran'}
];

const [{location}] = companies2;

const Google = {
  location: ['Mountain View', 'Ny', 'London']
};

const {location2: [location]} = Google;

// destructuring

function signup(username, password, email, dateOfBirth, city) {
    // create new user
}

signup('myname', 'mypassword','email@email.com', '1/1/1990', 'New York');

const user = {
    username: 'myname',
    password: 'mypw',
    email: 'email@email.com',
    dateOfBirth: '1-1-1990',
    city: 'ny'
};

//
const points = [
    [4,5],
    [10,1],
    [0,50]
];

// [
//     {x: 4, y:5},
//     {x: 10, y:20},
//     {x: 0, y:50}
// ]


points.map(([ x, y ]) =>  {
    // const [x, y] = pair;
    return { x, y};

});




