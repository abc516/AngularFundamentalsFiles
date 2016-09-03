/**
 * Created by anton on 9/3/16.
 */
'use strict';

eventsApp.directive('mySample', function ($compile) {
    return {
        restrict: 'C',
        template: "<input type='text' ng-model='sampleData' /> {{sampleData}} <br/>",
        scope: {

        }
    }
})