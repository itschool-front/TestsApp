(function () {
    angular.module('app')
        .controller('availableController', ['testsAvailable', 'user', availableController]);
        
        function availableController(testsAvailable, user) {
            
            
            var vm = this;
            
            vm.user = user;
            
            vm.tests = testsAvailable;
            
            console.log(vm.tests);
        }
})()