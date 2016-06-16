(function(){
    "use strict";
    
    angular.module('app.login', [])
        .controller('loginController', ['user', loginController]);
        
    function loginController(user) {
        var vm=this;
        vm.message="Hello from login!";
        
        console.log(user);
        
    }
})()