function StoreClerk(inventory, receipt, view) {
  this.inventory = inventory;
  this.receipt = receipt;
  this.view = view;
}

StoreClerk.prototype.stockShelf = function() {
  this.view.$inventoryDisplay.html(this.inventory.makeTidy());
};

StoreClerk.prototype.sellBooze = function() {
  this.view.$cart.html(this.receipt.tidyWithTotal());
};

StoreClerk.prototype.prepareCart = function() {
  this.view.$cart.droppable({
    drop: function(event, ui){
      var itemSku = ui.draggable.attr("id").replace("sku","");
      this.receipt.addToReceipt(this.inventory.shelf[itemSku]);
      this.sellBooze();
    }.bind(this)
  });
};
