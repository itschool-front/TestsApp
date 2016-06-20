(function () {
    angular.module('app')
        .controller('headerController', ['$location', '$anchorScroll',
                                          'anchorSmoothScroll', 'user', '$state', headerController]);
        
        function headerController($location, $anchorScroll, anchorSmoothScroll, $state) {
            var vm = this;
            
            vm.message = "Hello!";
            
         
            
            
            vm.gotoElement = function (eID){
            /*$location.hash('bottom');*/
                anchorSmoothScroll.scrollTo(eID);
                console.log('click');
            };
            
            
            
            
        }
})()