var app = angular.module('appName', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:'partials/root.html'
        })
        .when('/catz', {
            templateUrl:'partials/catz.html'
        })
        .when('/products', {
            templateUrl:'partials/products.html'
        })
        .when('/orders', {
            templateUrl:'partials/orders.html'
        })
        .when('/editProduct/:id/:name',{
            templateUrl:'partials/editProduct.html'
        })
        .otherwise({
            redirectTo:'/'
        })
})