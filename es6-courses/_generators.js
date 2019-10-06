//// Generators

// for off loops
const colors = ['red', 'green', 'blue'];

for (let colors of colors) {

}

const numbers =  [1,2,3,4];

let total = 0;
for (let numbers of numbers) {
    total += numbers;
}

// generators
// function that can be enterened and excited multiple times
// can run some code return value en return at the start

// add *
// walking to grocery store, entering with money, leaving with grocies, walking home
function* shopping() {
    // stuff on the sidewalk

    // walking down the sidewalk

    // go into store with cash
    yield stuffFromStore = 'cash';

    const cleanClothes = yield 'laundry';

    // walking back home
    return [stuffFromStore, cleanClothes];
}

// stuff in the store
const gen =  shopping();

gen.next(); // leaving house
// walked in
gen.next('groceries'); // leaving store

// walked in
gen.next('clean clothes'); // leaving laundrymat

// justincase
// https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5

////
function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
}

const gen = colors();
gen.next(); //r red and false
gen.next(); //r blue and false
gen.next(); //r green and false
gen.next(); //r true

const myColors = [];
for (let color of colors()){
    myColors.push(color);
}

// use generators to iterate through any datastructres
const testingTeam = {
    lead: 'Amanda',
    tester: 'Bill'
};

const engineeringTeam = {
    size: 3,
    department: 'Engerneering',
    lead: 'Jill',
    manager: 'Alex',
    engineer: 'Dave',
    testingTeam: testingTeam
};

//
function* TeamIterator(team) {
    yield team.lead;
    yield team.manager;
    yield team.engineer;
    const testingTeamGenerator =  TestingTeamIterator(team.testingTeam);
    yield* testingTeamGenerator;
}

function* TestingTeamIterator(team) {
    yield team.lead;
    yield team.tester;
}

const names = [];
for (let name of TeamIterator(engineeringTeam)) {
    names.push(name);
}

//
