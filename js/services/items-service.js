(function() {
  'use strict';

  function ItemsService(Item) {
    var Items = [], itemsConfig = [
      { label: 'A', value: 50, bonusFormula: { amount: 3, value: 200 } },
      { label: 'B', value: 30, bonusFormula: { amount: 2, value: 90 } },
      { label: 'C', value: 20 },
      { label: 'D', value: 15 },
    ];

    angular.forEach(itemsConfig, function(config) {
      Items.push(new Item(config));
    });

    return {
      get: function() {
        return Items;
      },
      getOnlyBonusItems: function() {
        return _.filter(Items, 'bonusFormula');
      }
    };
  }

  var module = angular.module('kahootPoints');
  module.factory('ItemsService', ItemsService);

}).call(this);
