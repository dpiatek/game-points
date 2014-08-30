(function() {
  'use strict';

  function ScoreSummaryController(ItemsService, UserService) {
    this.userService = UserService;
    this.items = ItemsService.get();
    this.bonusItems = ItemsService.getOnlyBonusItems();
  }

  ScoreSummaryController.prototype.getTotal = function() {
    return this.userService.get().calculateTotalPoints(this.items);
  };

  ScoreSummaryController.prototype.newGame = function() {
    return this.userService.create();
  };

  ScoreSummaryController.prototype.getTotalBonuses = function() {
    var user = this.userService.get(), self = this;

    return _.reduce(user.itemsCollected, function(sum, count, key) {
      var bonusItem = _.find(self.bonusItems, { label: key });
      return sum + (bonusItem ? bonusItem.getTotalValue(count) - bonusItem.getValue(count) : 0);
    }, 0);
  };

  var module = angular.module('kahootPoints');
  module.controller('ScoreSummaryController', ScoreSummaryController);

}).call(this);
