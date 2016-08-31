/**
 * Created by anton on 8/11/16.
 */
eventsApp.factory('$exceptionHandler', function () {
    return function (exception) {
        console.log("exception handled: " + exception.message)
    }
})
