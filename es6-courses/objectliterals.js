function createBookShop(inventory) {
   return {
       inventory: inventory,
       inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0
            );
       },
       priceForTitle(title) {
            return this.inventory.find(book => book.title === title).price;
       }
   }
}


const inventory = [
    { title: 'Harry potter', price: 10},
    { title: 'Javascript', price: 15},
];

const bookShop = createBookShop(inventory);

bookShop.inventoryValue();
bookShop.priceForTitle('Harry Potter');

// ex2
function saveFile (url, data) {
    $.ajax({ method: 'POST', url, data });
}

const url = "http://fileupload.com";
const data = { color: 'red' };

saveFile(url, data);