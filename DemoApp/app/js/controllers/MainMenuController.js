/**
 * Created by anton on 8/30/16.
 */
'use strict'
eventsApp.controller('MainMenuController',
    function MainMenuController($scope, $location) {
        $scope.createEvent() = function () {
            $location.url('/newEvent')
        };
})