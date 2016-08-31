/**
 * Created by anton on 8/11/16.
 */
eventsApp.factory('EventData', function ($resource) {
    var resource = $resource('/data/event/:id', {id:'@id'})
    return {
        getEvent: function (eventId) {
            return resource.get({id:eventId})
        },
        save: function (event) {
            event.id = 999
            return resource.save(event)
        },
        getAllEvents: function () {
            return resource.query();
        }
    };
});