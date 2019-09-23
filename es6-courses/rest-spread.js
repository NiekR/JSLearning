// Rest & Spread Operator

// rest
function addNumbers(...numbers) {
    return numbers.reduce( sum, number => sum + number, 0)
}

addNumbers(1,2,3,4,5);

// spread
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
const fallColor = ['fire red', 'fall orange'];

// combine both arrays
defaultColors.concat(userFavoriteColors);

// spread operator way
// add new items and combine items
const allColors = [ 'green', ...defaultColors, ...userFavoriteColors, ...fallColor ];

// to change function without breaking existing code
const MathLibrary = {
    calculateProduct(...rest) {
        return this.multiply(...rest);
    },
    multiply(a,b) {
        return a * b;
    }
};