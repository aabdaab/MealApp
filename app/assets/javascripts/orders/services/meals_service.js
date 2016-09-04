var app = angular.module("app");

app.factory('meals', ['$http', function($http) {
    var m = {
        all: []
    }

    m.getAll = function () {
        return $http.get('/api/meals.json').success(function (data) {
            angular.copy(data, m.all);
        })
    }

    return m;
}]);
