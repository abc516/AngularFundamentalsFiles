/**
 * Created by anton on 8/6/16.
 */
'use strict'

eventsApp.controller('EventController',
    function EventController($scope) {
        $scope.boolValue = false
        $scope.mystyle = {color:'red'}
        $scope.buttonDisabled = true
        $scope.sortorder = 'name';
        $scope.event = {

            name: 'Angular Boot Camp',
            date: '1/1/2013',
            time: '10:30',
            location: {
                address: '123 Fake St',
                city: 'Gary',
                province: 'Indiana'
            },
            imageUrl: 'img/angularjs-logo.png',
            sessions: [

                {
                    name: 'Directives',
                    creatorName: 'Johnnie Doe',
                    duration: 1,
                    level: 'Advanced',
                    abstract: 'Boring hard stuff',
                    upVoteCount: 0
                },
                {
                    name: 'Controllers',
                    creatorName: 'Johnnie Row',
                    duration: 2,
                    level: 'Intro',
                    abstract: 'Boring hard stuff controllers',
                    upVoteCount: 0
                },
                {
                    name: 'Models',
                    creatorName: 'Johnnie Fab',
                    duration: '1 hr',
                    level: 4,
                    abstract: 'Fabio models and MVC!',
                    upVoteCount: 0
                }
            ]
        }

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);