(function() {
  'use strict';

  function ScoreTableController(UserService, ItemsService) {
    this.items = ItemsService.get();
    this.userService = UserService;
  }

  ScoreTableController.prototype.getCollectedItems = function() {
    var user = this.userService.get();
    return _.filter(this.items, function(item) {
      return user.itemsCollected[item.label];
    });
  };

  ScoreTableController.prototype.getCount = function(item) {
    var user = this.userService.get();
    return user.itemsCollected[item.label];
  };

  ScoreTableController.prototype.getTotalValue = function(item) {
    return item.getTotalValue(this.getCount(item));
  };

  var module = angular.module('kahootPoints');
  module.controller('ScoreTableController', ScoreTableController);

}).call(this);
