(function () {
    angular.module('app')
        .controller('availableController', ['testsAvailable', 'user', 'anchorSmoothScroll', availableController]);
        
        function availableController(testsAvailable, user, anchorSmoothScroll) {
            
            
            var vm = this;
            vm.message = "Tests available";
            
            vm.user = user;
            
            vm.tests = testsAvailable;
            
            vm.multiAnswers = {};
            vm.singleAnswers = {};
            
            
            
            console.log(vm.tests);
            
            
             vm.gotoElement = function (eID, offset){
            /*$location.hash('bottom');*/
                anchorSmoothScroll.scrollTo(eID, offset);
                console.log('click');
            };
            
            
            
        }
})()