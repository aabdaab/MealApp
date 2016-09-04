var app = angular.module("app");

app.factory('users', ['$http', function($http) {
    var u = {
        all: []
    }

    u.getAll = function () {
        return $http.get('/api/users.json').success(function (data) {
            angular.copy(data, u.all);
        })
    }

    return u;
}]);
