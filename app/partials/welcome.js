(function () {
    angular.module('app')
        .controller('welcomeController', ['$location', '$anchorScroll', 'anchorSmoothScroll', welcomeController]);
        
        function welcomeController($location, $anchorScroll, anchorSmoothScroll) {
            var vm = this;
            
            
            
           
            /*vm.gotoMore = function(){
   
                $anchorScroll('more-info');
            }*/
            
            
            
            
            vm.gotoElement = function (eID){
            /*$location.hash('bottom');*/
 
      
                anchorSmoothScroll.scrollTo(eID);
                console.log('click');
            };
            
            
            
            
            
        }
})()