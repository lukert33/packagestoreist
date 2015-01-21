function Inventory() {
  this.shelf = [];
}

Inventory.prototype.addToShelf = function(name, price) {
  var item = new Item(name, price);
  this.shelf.push(item);
}

function Item(name, price) {
  this.name = name;
  this.price = price;
}

function PackieCart(){}

// view
// listening for events and sending them to the controller
function Display(shelfSelector, cartSelector){
  this.$inventoryDisplay = $(shelfSelector);
  this.$cartSelector = $(cartSelector);
}

