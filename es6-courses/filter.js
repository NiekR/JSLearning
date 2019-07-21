// Filter helper
var products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'bread', type: 'bakery' }
];

var filteredProducts = [];

for (var i = 0; i < products.length; i++){
    if (products[i].type === 'fruit'){
        filteredProducts.push(products[i]);
    }
}

console.log(filteredProducts);

var newFilteredProducts = products.filter(function(product){
    return product.type === 'fruit';
});

console.log(newFilteredProducts);


