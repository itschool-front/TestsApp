(function () {
    
    "use strict";
    
    angular.module('app')
        .controller('testController', testController);
        
    function testController(singleTest){
        var vm = this;
        vm.message = "Hello from test";
        
        vm.test = singleTest.data;
        
       
        
        
    }
})()