(function () {
    
    "use strict";
    
    angular.module('app')
        .controller('testController', testController);
        
    function testController(singleTest){
        var vm = this;
        vm.message = "Hello from test";
        
        console.log(singleTest.data);
        
       /* singleTest.then(function (test) {
            console.log(test);
        })*/
        
        
        
    }
})()