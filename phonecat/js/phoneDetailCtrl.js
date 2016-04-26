var phoneController = angular.module('fr.sqli.phoneCatDetail', []);

function detailCtrl($routeParams, Phone) {
    var vm = this;
    //vm.phoneId = $routeParams.phoneId;

    vm.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone){
        vm.mainImageUrl = phone.images[0];
    });

    vm.setImage = function (imageUrl) {
        vm.mainImageUrl = imageUrl;
    };

}
detailCtrl.$inject = ["$routeParams", "Phone"];
phoneController.controller('PhoneDetailCtrl', detailCtrl);