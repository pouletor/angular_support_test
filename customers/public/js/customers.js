var CustomersCtrl = function(CustomersSrv){
    var vm = this;
    vm.list = CustomersSrv.query();

    vm.doDelete = function(customer){
        CustomersSrv.delete(customer).$promise.then(function(){
            vm.list = CustomersSrv.query();//on recharge la liste après
        });

    };

    vm.submitCust = function(cust){
        CustomersSrv.save(cust).$promise.then(function(){
            vm.list = CustomersSrv.query();//on recharge la liste après
        });
    }
};

CustomersCtrl.$inject = ["CustomersSrv"];


angular
    .module("customer.Customers", ["customers.CustomersServiceModule"])
    .controller("CustomersCtrl", CustomersCtrl);




