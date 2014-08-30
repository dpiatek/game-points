(function() {
  'use strict';

  function Item(config) {
    this.label = config.label;
    this.value = config.value;
    this.bonusFormula = config.bonusFormula || null;
  }

  Item.prototype.getTotalValue = function(amount) {
    if (this.bonusFormula) {
      var rest = amount % this.bonusFormula.amount;
      return rest * this.value + this.getBonusValue(amount);
    } else {
      return this.getValue(amount);
    }
  };

  Item.prototype.getBonusValue = function(amount) {
    var rest = amount % this.bonusFormula.amount;
    return (amount - rest) / this.bonusFormula.amount * this.bonusFormula.value;
  };

  Item.prototype.getValue = function(amount) {
    return amount * this.value;
  };

  var module = angular.module('kahootPoints');
  module.value('Item', Item);

}).call(this);
