$(document).ready(function() {
  var inv = new Inventory;
  var display = new Display("#store_list", "#grocery_list");
  var receipt = new CustomerReceipt();
  var clerk = new StoreClerk(inv, receipt, display);

  seed.call(inv, drinks);

  clerk.stockShelf();
  clerk.sellBooze();
  display.setDraggable();
  clerk.prepareCart();
});

var drinks = {
  "Guiness": 30,
  "Smirnoff": 20,
  "Jello Shots (made w/ love)": 5,
  "Harlem Snake Bite": 3,
  "Rumplemintz": 12,
  "PBR": 3,
  "Frozen Pizza": 10
};

function seed(drinks) {
  for(var key in drinks) {
    this.addToShelf(key, drinks[key]);
  }
}

