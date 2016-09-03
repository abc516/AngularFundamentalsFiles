/**
 * Created by anton on 9/3/16.
 */
eventsApp.directive('datePicker', function () {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.datepicker()
        }
    }
})