function Inventory() {
  this.shelf = [];
}

Inventory.prototype.addToShelf = function(name, price) {
  var item = new Item(name, price);
  this.shelf.push(item);
};

Inventory.prototype.makeTidy = function() {
  output = "";
  this.shelf.forEach(function(item) {
    output += "<tr" + " id=sku" + this.shelf.indexOf(item) + "><td>" + item.name + "</td><td>" + item.price + "</td></tr>";
  }.bind(this));
  return output;
};

function Item(name, price) {
  this.name = name;
  this.price = price;
}

function CustomerReceipt() {
  this.contents = [];
}

CustomerReceipt.prototype.addToReceipt = function(itemObject) {
  this.contents.push(itemObject);
};

CustomerReceipt.prototype.tidyWithTotal = function() {
  output = "";
  total = 0;
  this.contents.forEach(function(item) {
    output += "<tr><td>" + item.name + "</td><td>" + item.price + "</td></tr>";
    total += item.price;
  });
  output += "<tr><td> TOTAL </td><td>" + total + "</td></tr>";
  return output;
};




