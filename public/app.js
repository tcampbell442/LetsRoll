var letsRoll = angular.module("letsRoll", []);

letsRoll.controller("AppCtrl", function ($http) {
        var app = this;
        var url = "http://localhost:3000";

    app.saveProduct = function(newProduct){
        console.log(newProduct);
        data = {
            name: newProduct
        };
        $http.post(url + "/addProduct", (data))
            .then(function successCallback (response){
                console.log("success");
                loadProducts();
            }), function errorCallback(response){
                console.log(response);
        }
    }
    function loadProducts() {
        $http.get(url).then(function (products) {
            app.products = products.data;
            //console.log(products.data)
        })
    }

    loadProducts();
    
})

