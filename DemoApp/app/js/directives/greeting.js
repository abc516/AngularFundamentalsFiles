/**
 * Created by anton on 9/3/16.
 */
eventsApp.directive('greeting', function () {
    return {
        restrict: 'E',
        replace: true,
        template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
        controller: function ($scope) {
            $scope.sayHello = function () {
                alert('Hello');
            }
        }
    }
})