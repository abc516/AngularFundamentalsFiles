/**
 * Created by anton on 8/21/16.
 */
eventsApp.controller('EventListController',
    function EventListController($scope, $location, EventData) {
        $scope.events = EventData.getAllEvents();
    }
);