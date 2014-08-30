(function() {
  'use strict';

  function ItemsPadsController(ItemsService, UserService) {
    this.items = ItemsService.get();
    this.userService = UserService;
  }

  ItemsPadsController.prototype.addItem = function(item) {
    var user = this.userService.get();
    var itemCount = user.itemsCollected[item.label];

    user.itemsCollected[item.label] = isNaN(itemCount) ? 1 : ++itemCount;
  };

  var module = angular.module('kahootPoints');
  module.controller('ItemsPadsController', ItemsPadsController);

}).call(this);
