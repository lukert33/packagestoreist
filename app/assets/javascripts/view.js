function Display(shelfSelector, cartSelector) {
  this.$inventoryDisplay = $(shelfSelector);
  this.$cart = $(cartSelector);
}

Display.prototype.setDraggable = function() {
  var $rows = this.$inventoryDisplay.children();
  for( var i = 0; i < $rows.length; i++){
    $($rows[i]).draggable({
    helper: "clone"
  });
  }
};
