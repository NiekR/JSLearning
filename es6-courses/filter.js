// // Filter helper
// var products = [
//     { name: 'cucumber', type: 'vegetable', quantity: 5, price: 5 },
//     { name: 'banana', type: 'fruit',quantity: 10, price: 8 },
//     { name: 'bread', type: 'bakery',quantity: 20, price: 25 }
// ];
//
// var filteredProducts = [];
//
// for (var i = 0; i < products.length; i++){
//     if (products[i].type === 'fruit'){
//         filteredProducts.push(products[i]);
//     }
// }
//
// console.log(filteredProducts);
//
// var newFilteredProducts = products.filter(function(product){
//     return product.type === 'fruit';
// });
//
// console.log(newFilteredProducts);
//
// // Type is vegetable quantity greater than 0  price less than then 10
//
// var specificFilteredProducts = products.filter(function(product){
//    return product.type === 'vegetable'
//        && product.quantity > 0
//        && product.price < 10;
// });
//
// console.log(specificFilteredProducts);

var post = {id: 4, title: 'new post'};

var comments = [
    { postId: 4, content: 'Nice' },
    { postId: 3, content: 'Good job' },
    { postId: 4, content: 'This sucks' },
];

function commentsForPost(post, comments) {
    return comments.filter(function(comment){
       return comment.postId === post.id;
    });
}

console.log(commentsForPost(post, comments));
