var app = angular.module("app");

app.controller('MealModalCtrl', ['$scope', '$uibModalInstance', 'meals', 'orders', 'currentOrder', function ($scope, $uibModalInstance, meals, orders, currentOrder) {

    $scope.order = '';
    $scope.orders = orders.all;

    $scope.meals = meals.all.filter(function (meal) {
        return meal.restaurant == currentOrder.restaurant_name;
    }).map(function (meal) {
        return meal;
    });

    $scope.selectedMeal = '';

    $scope.price = '';

    $scope.fillPrice = function () {
        console.log($scope.selectedMeal);
        $scope.price = findPriceByMealName($scope.meals, $scope.selectedMeal);
    }

    var findPriceByMealName = function (meals, selectedMeal) {
        meals.filter(function (meal) {
            return meal.name == selectedMeal;
        }).map(function (meal) {
            return meal.price;
        })

        return meals[0].price;
    }

    $scope.orderer = currentOrder.owner;

    $scope.close = function () {
        $uibModalInstance.dismiss('cancel');
    }

    $scope.addMeal = function () {
        if( (!$scope.selectedMeal || $scope.selectedMeal === '') || (!$scope.orderer || $scope.orderer === '')) { return; }
        orders.update(currentOrder.id, {meal: $scope.selectedMeal});
        $uibModalInstance.close(currentOrder);
    }
}]);