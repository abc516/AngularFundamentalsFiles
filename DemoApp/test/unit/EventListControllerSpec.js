/**
 * Created by anton on 9/5/16.
 */
'use strict';

describe('EventListController', function () {
    var $controllerConstructor, scope, mockEventData;

    beforeEach(module("eventsApp"))

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new()
        $controllerConstructor = $controller
        mockEventData = sinon.stub({getAllEvents: function () {}})
    }))

    it('should set the scope events to the result of eventData.getAllEvents', function () {
        var mockEvents = {};

        mockEventData.getAllEvents.returns(mockEvents);

       $controllerConstructor("EventListController",
            {'$scope':scope, eventData: mockEventData})

        expect(scope.events).toBe(mockEvents)
    })
})