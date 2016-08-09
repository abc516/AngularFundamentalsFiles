/**
 * Created by anton on 8/7/16.
 */
'use strict'

eventsApp.controller('EditEventController',
    function EditEventController($scope) {

        $scope.saveEvent = function (event) {
            console.log('save function called')
            if(newEventForm.$valid){
                 window.alert('event ' + event.name + ' saved!');
            }


        };
        
        $scope.cancelEvent = function (event) {
            window.location = "/EventDetails.html";
        };
    }
);