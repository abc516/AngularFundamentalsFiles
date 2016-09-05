/**
 * Created by anton on 9/5/16.
 */
describe('EditProfileControllerSpec', function () {
    var $controllerConstructor, scope, mockGravatarUrlBuilder;

    beforeEach(module("eventsApp"))

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new()
        $controllerConstructor = $controller
        mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl: function () {}})
    }))

    it('should build the gravatar with given email address', function () {
        $controllerConstructor('EditProfileController',
            {'$scope': scope, gravatarUrlBuilder: mockGravatarUrlBuilder});
        var email = "joe@joe.com";

        scope.getGravatarUrl(email)

        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true)
    })
})