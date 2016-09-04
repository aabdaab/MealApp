var app = angular.module('app', ['ui.router', 'ngMaterial', 'md.data.table', 'ngAnimate', 'ui.bootstrap', 'templates']);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'main/_home.html',
            controller: 'MainCtrl',
        })
        .state('orders', {
            url: '/orders',
            templateUrl: 'orders/views/orders.html',
            controller: 'OrdersCtrl',
            css: 'orders/orders.css.scss',
            resolve: {
                ordersPromise: ['orders', function (orders) {
                    return orders.getAll();
                }],
                mealsPromise: ['meals', function (meals) {
                    return meals.getAll();
                }]
            }
        })
    $urlRouterProvider.otherwise('home')
}])