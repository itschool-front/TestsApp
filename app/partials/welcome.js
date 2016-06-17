(function () {
    angular.module('app')
        .controller('welcomeController', ['$location', '$anchorScroll', 'anchorSmoothScroll', welcomeController]);
        
        function welcomeController($location, $anchorScroll, anchorSmoothScroll) {
            var vm = this;
            
           
            /*vm.gotoMore = function(){
   
                $anchorScroll('more-info');
            }*/
            
            
            
            
            vm.gotoElement = function (eID){
      // set the location.hash to the id of
      // the element you wish to scroll to.
     // $location.hash('bottom');
 
      // call $anchorScroll()
                anchorSmoothScroll.scrollTo(eID);
                console.log('click');
            };
            
            
            
            
            
        }
})()