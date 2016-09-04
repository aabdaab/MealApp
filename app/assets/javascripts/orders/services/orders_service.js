var app = angular.module("app");

app.factory('orders', ['$http', function($http) {
    var o = {
        all: []
    }

    o.getAll = function () {
        return $http.get('/api/orders.json').success(function (data) {
           angular.copy(data, o.all);
        })
    }

    o.update = function (order_id, update_info) {
        return $http.put('/api/orders/' + order_id + '.json', update_info).success(function (data) {
            o.getAll();
        })
    }

    o.delete = function (order_id) {
        return $http.delete('/api/orders/' + order_id + '.json').success(function (data) {
            o.getAll();
        })
    }

    o.createOrder = function (order) {
        return $http.post('/api/orders.json', order).success(function (data) {
            o.all.push(data);
        })
    }

    return o;
}]);
