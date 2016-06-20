(function () {
    angular.module('app')
        .controller('availableController', ['testsAvailable', 'user', 'anchorSmoothScroll', 'testAPI', availableController]);
        
        function availableController(testsAvailable, user, anchorSmoothScroll, testAPI) {
            
            
            var vm = this;
            
            vm.showResults = false;
            
            
            vm.message = "Tests available";
            
            vm.user = user;
            
            vm.tests = testsAvailable;
            
            vm.multiAnswers = [];
            vm.singleAnswers = [];
            
            vm.request = [];
            vm.serverResponse = {}
            
            console.log(vm.tests);
            
            
             vm.gotoElement = function (eID, offset){
            /*$location.hash('bottom');*/
                anchorSmoothScroll.scrollTo(eID, offset);
                console.log('click');
            };
            
            
            
            
            
            
             vm.submitAnswers = function () {
            
            /**
             * Transform request to a suitable for an API form
             * TO DO: move this to requestTransformers factory <----- !!!
             */
            
            var myHeader = {
                fName: user.firstName,
                sName: user.lastName,
                phone: user.phone,
                email: user.email
            };
            
            vm.request = {
                header: myHeader,
                answers: _.compact(_.concat(vm.multiAnswers, vm.singleAnswers))
            };
           
                       
            testAPI.submitTestAnswers(vm.request)
                .then(function (data) {
                    vm.testResultId = data.data.id;
                    console.log('data---------');
                    console.log(data.data);
                    
                    testAPI.getTestResult(vm.testResultId)
                        .then(function(data){
                            console.log(data);
                            vm.serverResponse = data.data;
                            vm.showResults = true;
                        });
                });
                
            }/*Submit answers*/
            
            
            
            
            
        }
})()