$(document).ready(function(){
  inv = new Inventory;
  display = new Display("#store_list", "#grocery_list");
  cart = new PackieCart();
  clerk = new StoreClerk(inv, cart, display);
  inv.addToShelf("jager", 30);
  inv.addToShelf("smirnoff",20);
  inv.addToShelf("jello shots", 5);
  inv.addToShelf("harlem snake bite", 3);
  inv.addToShelf("rumplemintz",12);
  inv.addToShelf("pbr", 3);
  inv.addToShelf("belly off frank", 10);
  cart.addToCart(inv.shelf[0]);
  cart.addToCart(inv.shelf[1]);
  cart.addToCart(inv.shelf[2]);
  cart.addToCart(inv.shelf[3]);
  clerk.stockShelf();
  clerk.sellBooze();
})

// model

function Inventory() {
  this.shelf = [];
}

Inventory.prototype.addToShelf = function(name, price) {
  var item = new Item(name, price);
  this.shelf.push(item);
}

Inventory.prototype.makeTidy = function(){
  output = ""
  this.shelf.forEach(function(item){
    debugger
    output += "<tr" + " id=sku" + this.shelf.indexOf(item) + "><td>"+item.name + "</td><td>"+ item.price + "</td></tr>";
  }.bind(this))
  return output;
}

function Item(name, price) {
  this.name = name;
  this.price = price;
}

function PackieCart(){
  this.contents = [];
}

PackieCart.prototype.addToCart = function(itemObject) {
  this.contents.push(itemObject);
}

PackieCart.prototype.tidyWithTotal = function(){
  output = "";
  total = 0;
  this.contents.forEach(function(item){
    output += "<tr><td>"+item.name + "</td><td>"+ item.price + "</td></tr>";
    total += item.price;
  })
  output += "<tr><td> TOTAL </td><td>"+ total + "</td></tr>"
  return output;
}

// controller
// should send the shelf abd packiecart to the view for rendering
function StoreClerk(inventory, cart, view){
  this.inventory = inventory;
  this.cart = cart;
  this.view  = view;
}

StoreClerk.prototype.stockShelf = function() {
  this.view.$inventoryDisplay.html( this.inventory.makeTidy() );
}

StoreClerk.prototype.sellBooze = function(){
  this.view.$cart.html( this.cart.tidyWithTotal() );
}

// view
// listening for events and sending them to the controller
function Display(shelfSelector, cartSelector){
  this.$inventoryDisplay = $(shelfSelector);
  this.$cart = $(cartSelector);
}

