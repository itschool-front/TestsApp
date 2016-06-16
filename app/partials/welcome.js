(function () {
    angular.module('app')
        .controller('welcomeController', ['$location', '$anchorScroll', welcomeController]);
        
        function welcomeController($location, $anchorScroll) {
            var vm = this;
            
           
            vm.gotoMore = function(){
   
                $anchorScroll('more-info');
            }
        }
})()