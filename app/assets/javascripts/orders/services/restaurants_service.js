var app = angular.module("app");

app.factory('restaurants', ['$http', function($http) {
    var o = {
        all: [],
        meals: []
    }

    o.getAll = function () {
        return $http.get('/api/restaurants.json').success(function (data) {
            angular.copy(data, o.all);
        })
    }

    o.getMeals = function (restaurant_id) {
        return $http.get('/api/restaurants/' + restaurant_id + '.json').success(function (data) {
            angular.copy(data.meals, o.meals);
        })
    }

    return o;
}]);
