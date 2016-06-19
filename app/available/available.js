(function () {
    angular.module('app')
        .controller('availableController', ['testsAvailable', 'user', availableController]);
        
        function availableController(testsAvailable, user) {
            
            
            var vm = this;
            vm.message = "Tests available";
            
            vm.user = user;
            
            vm.tests = testsAvailable;
            
            vm.multiAnswers = {};
            vm.singleAnswers = {};
            
            
            
            console.log(vm.tests);
        }
})()