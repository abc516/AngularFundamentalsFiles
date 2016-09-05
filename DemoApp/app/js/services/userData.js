/**
 * Created by anton on 9/5/16.
 */
eventsApp.factory('userData', ['userResrouce', function (userResource) {
    return {
        getUser:function (userName, callback) {
            return userResource.get({userName:userName}, function (user) {
                if (callback)
                    callback(user)
            })
        },
        save:function (user) {
            userResource.save(user)
        },
        users:function () {
            return userResource.queryAll(function (users) {
                return users
            })
        }
    }
}])