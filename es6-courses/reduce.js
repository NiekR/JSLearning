// Reduce

var numbers = [10,20,30];

var sum = 0;

var $numSum = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);

//console.log($numSum);

// colors
var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' }
];

var $colors = primaryColors.reduce(function (acc, primaryColor) {
    acc.push(primaryColor.color);

    return acc;
}, []);

//console.log($colors);

// Balanced strings
function balanceParens(string){
    return !string.split("").reduce(function(previous, char){
        if (previous < 0) { return previous }
        if (char === "(") { return ++previous }
        if (char === ")") { return --previous }
        return previous;
    }, 0);
}

//console.log(balanceParens("((()))"));

// ex1
var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

var deskTypes = desks.reduce(function(acc, desks) {
    desks.type === 'sitting' ? acc.sitting++ : acc
    desks.type === 'standing' ? acc.standing++ : acc
    return acc
}, { sitting: 0, standing: 0 });

console.log(deskTypes);

// ex2
var array = [1,1,2,3,4,4];

function unique(array) {
    var uniqueNum = array.reduce(function (acc, number) {

        return uniqueNum;
    }, []);
}

