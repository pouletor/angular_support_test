var phoneController = angular.module('fr.sqli.phoneCatList', []);

function listCtrl(Phone) {
    var vm = this;
    vm.phones = Phone.query();

    vm.orderProp = 'age';
}
listCtrl.$inject = ["Phone"];
phoneController.controller('PhoneListCtrl', listCtrl);
