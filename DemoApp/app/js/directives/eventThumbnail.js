/**
 * Created by anton on 9/3/16.
 */

eventsApp.directive('eventThumbnail', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/eventThumbnail.html',
        scope: {
            event: "=event"
        }
    }
})