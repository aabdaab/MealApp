var app = angular.module("app");

app.controller('OrderModalCtrl', ['$scope', '$uibModalInstance', 'orders', 'users', 'restaurants', function ($scope, $uibModalInstance, orders, users, restaurants) {

    $scope.owner = '';
    $scope.restaurant_name = '';
    $scope.createdOrder = '';
    $scope.users = users.all;
    $scope.orders = orders.all;
    $scope.restaurants = restaurants.all;

    $scope.close = function () {
        $uibModalInstance.dismiss('cancel');
    }

    $scope.createOrder = function () {
        if (!$scope.restaurant_name || $scope.restaurant_name === '' || !$scope.owner || $scope.owner === '') { return; }
        orders.createOrder({owner: $scope.owner, restaurant_name: $scope.restaurant_name});

        $uibModalInstance.close($scope.orders);
    }
}]);