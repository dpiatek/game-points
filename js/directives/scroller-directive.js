(function() {
  'use strict';

  function scroller($window, UserService) {
    return {
      restrict: 'EA',
      scope: {
        overlay: '@'
      },
      link: function(scope, el) {
        var windowEl = angular.element($window);
        var overlayEl = angular.element(scope.overlay);

        var items = function() {
          return UserService.get().itemsCollected;
        };

        var head = el.find('thead').clone();
        var table = angular.element('<table class="table -kp-score-table">');

        head.css('display', 'table-header-group');
        table.css('margin-bottom', '-1px');
        table.append(head);
        table.insertBefore(el);

        el.addClass('kp-scroller');

        function updateHeight() {
          var overlayTop = overlayEl.offset().top;
          var elHeight = el.height();
          var elTop = el.offset().top;
          var elBottom = elTop + elHeight;

          if (overlayTop > elBottom) {
            el.height(overlayTop - elBottom + elHeight);
          } else if (overlayTop < elBottom) {
            el.css('height', overlayTop - elTop);
          }
        }

        scope.$watch(items, function(newVal) {
          if (_.isEmpty(newVal)) return;
          updateHeight();
        }, true);

        windowEl.on('resize', function() {
          updateHeight();
        });
      }
    };
  }

  var module = angular.module('kahootPoints');
  module.directive('scroller', scroller);

}).call(this);
