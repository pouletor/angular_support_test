var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'fr.sqli.phoneCatList',
    'fr.sqli.phoneCatDetail',
    'phonecatFilters',
    'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
function($routeProvider) {
    $routeProvider.
    when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl',
        controllerAs: 'phoneCtrl'
    }).
    when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl',
        controllerAs: 'detailCtrl'
    }).
    otherwise({
        redirectTo: '/phones'
    });
}]);