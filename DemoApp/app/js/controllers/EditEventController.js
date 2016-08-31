/**
 * Created by anton on 8/7/16.
 */
'use strict'

eventsApp.controller('EditEventController',
    function EditEventController($scope, EventData) {

        $scope.saveEvent = function (event, newEventForm) {

            if(newEventForm.$valid){
                 EventData.save(event)
                     .$promise
                     .then(function (response) { console.log('success', response)})
                     .catch(function (response) { console.log('failure', response)})
            }


        };
        
        $scope.cancelEvent = function (event) {
            window.location = "/EventDetails.html";
        };
    }
);