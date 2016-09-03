/**
 * Created by anton on 9/3/16.
 */
eventsApp.directive('upvote', function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'templates/directives/upvote.html',
        scope: {
            upvote: "&", //parent scope not isolated scope
            downvote: "&",
            count: "=" //object in that's upvote count
        }
     }
})