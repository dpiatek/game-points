(function() {
  'use strict';

  function UserService(User) {
    var instance = new User();

    return {
      get: function() {
        return instance;
      },
      create: function() {
        instance = new User();
      }
    };
  }

  var module = angular.module('kahootPoints');
  module.factory('UserService', UserService);

}).call(this);
