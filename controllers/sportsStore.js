angular.module("sportsStore")
.controller("sportsStoreCtrl",function($scope){
    $scope.data={
        products:[
            {name:"Product #1",description:"A product",category:"Category #1",price:100},
            {name:"Product #2",description:"A product",category:"Category #1",price:200},
            {name:"Product #3",description:"A product",category:"Category #2",price:300},
            {name:"Product #4",description:"A product",category:"Category #3",price:400},
            {name:"Product #5",description:"A product",category:"Category #4",price:100},
            {name:"Product #6",description:"A product",category:"Category #1",price:200},
            {name:"Product #7",description:"A product",category:"Category #2",price:300},
            {name:"Product #8",description:"A product",category:"Category #3",price:400}
        ]
    };

});