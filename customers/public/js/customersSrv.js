var CustomersSrv = function($resource){
    return $resource("/customers/:customerId", {customerId:"@id"});
};
CustomersSrv.$inject = ["$resource"];

angular
    .module("customers.CustomersServiceModule", ["ngResource"])
    .factory("CustomersSrv", CustomersSrv);
