(function () {
    angular.module('app')
        .controller('welcomeController', ['$location', '$anchorScroll',
                                          'anchorSmoothScroll', 'user', 'testAPI', '$state', welcomeController]);
        
        function welcomeController($location, $anchorScroll, anchorSmoothScroll, user, testAPI, $state) {
            var vm = this;
            
            vm.message = "Hello!";
            
            vm.user = user;
            vm.loginResponse = {};
            
           /**
            * Login user
            */
           vm.login = function () {
               
               //check user data to be sent
               console.log(vm.user);
               
               
               
               //Get response from server
                vm.loginResponse = testAPI.login(vm.user).then(function (data) {
                   
                   //save response in model property
                   vm.loginResponse = data.data;
                   
                   //check what was recieved
                   console.log(vm.loginResponse);
                   
                   //Check if the server sent token 
                   if(user.login(vm.loginResponse)){
                       $state.go('app.available');
                   }
                   else{
                       $state.go('welcome');
                   }
               });
           }
            
            
            
            vm.gotoElement = function (eID){
            /*$location.hash('bottom');*/
                anchorSmoothScroll.scrollTo(eID);
                console.log('click');
            };
            
            
            /*vm.gotoMore = function(){
   
                $anchorScroll('more-info');
            }*/
            
            
            
            
            
            
        }
})()