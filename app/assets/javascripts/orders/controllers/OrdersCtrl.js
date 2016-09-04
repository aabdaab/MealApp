var app = angular.module("app");

app.controller('OrdersCtrl', ['$scope', '$uibModal', 'orders', 'meals', '$timeout', function ($scope, $uibModal, orders, meals, $timeout) {

    $scope.getDelivered = function () {
        var delivered = orders.all.filter(function (order) {
            return order.state === 'Delivered';
        }).map(function (deliveredOrder) {
            return deliveredOrder;
        });

        return delivered;
    }

    $scope.orders = orders.all;

    $scope.deleteOrder = function (order) {
        orders.delete(order.id).success(function (result) {
            $scope.orders = orders.all;
        });
    }

    $scope.history = false;

    $scope.edit = false;

    $scope.selectedMeal = '';
    $scope.meals = [];


    function loadMeals(order) {
        $scope.meals = meals.all.filter(function (meal) {
            return meal.restaurant == order.restaurant_name;
        }).map(function (meal) {
            return meal;
        });
    }

    $scope.setHistory = function (bool) {
        $scope.history = bool;
    }

    $scope.editOrder = function (order) {
        $scope.edit = true;
        loadMeals(order);
    }

    $scope.accordionArray = [];

    $scope.orderIt = function (order) {
        orders.update(order.id, {state: "Ordered"}).success(function (result) {
            $scope.orders = orders.all;
            $timeout(function () { orders.update(order.id, {state: "Delivered"}).success(function (result) { $scope.orders = orders.all; $scope.delivered = $scope.getDelivered(); }) }, 20000);
        });
    }

    $scope.openCreateOrderForm = function() {
        var modalInstance = $uibModal.open({
            templateUrl: 'orders/views/create_order_form.html',
            css: 'orders.css',
            controller: 'OrderModalCtrl',
            resolve: {
                usersPromise: ['users', function (users) {
                    return users.getAll();
                }],
                restaurantsPromise: ['restaurants', function (restaurants) {
                    return restaurants.getAll();
                }]
            }
        });

        modalInstance.result.then(function (orders) {
            $scope.orders = orders;
        });
    }

    $scope.openAddMealForm = function (order) {
        var modalInstance = $uibModal.open({
            templateUrl: 'orders/views/add_meal_form.html',
            css: 'orders.css',
            controller: 'MealModalCtrl',
            resolve: {
                usersPromise: ['users', function (users) {
                    return users.getAll();
                }],
                mealsPromise: ['meals', function (meals) {
                    return meals.getAll();
                }],
                currentOrder: function () {
                    return order;
                }
            }
        })
    }

    $scope.openEditMealForm = function (order) {
        var modalInstance = $uibModal.open({
            templateUrl: 'orders/views/edit_meal_form.html',
            css: 'orders.css',
            controller: 'MealModalCtrl',
            resolve: {
                usersPromise: ['users', function (users) {
                    return users.getAll();
                }],
                mealsPromise: ['meals', function (meals) {
                    return meals.getAll();
                }],
                currentOrder: function () {
                    return order;
                }
            }
        })
    }

}]);