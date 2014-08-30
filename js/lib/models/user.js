(function() {
  'use strict';

  function User() {
    this.totalPoints = 0;
    this.itemsCollected = {};
  }

  User.prototype.calculateTotalPoints = function(items) {
    return _.reduce(this.itemsCollected, function(sum, count, key) {
      return sum + _.find(items, { label: key }).getTotalValue(count);
    }, 0);
  };

  var module = angular.module('kahootPoints');
  module.value('User', User);

}).call(this);
