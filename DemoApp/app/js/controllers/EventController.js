/**
 * Created by anton on 8/6/16.
 */
'use strict'

eventsApp.controller('EventController',
    function EventController($scope, EventData, $routeParams) {

        $scope.sortorder = 'name';
        $scope.event = EventData.getEvent($routeParams.eventId)

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };

        $scope.scrollToSession = function () {
            $anchorScroll()
        }
    }
);