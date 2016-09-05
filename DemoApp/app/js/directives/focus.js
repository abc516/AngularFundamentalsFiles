/**
 * Created by anton on 9/3/16.
 */
eventsApp.directive('focus', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs, controller) {
            scope.getElementById(element.id).focus()
        }
    }
})