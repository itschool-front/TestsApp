(function () {

    "use strict";

    angular.module('app')
        .controller('testController', ['singleTest', 'testAPI', 'user', testController]);

    function testController(singleTest, testAPI, user) {
        var vm = this;

        vm.user = user;

        vm.test = singleTest;
        
        vm.multiAnswers = [];
        vm.singleAnswers = [];

        vm.loginResponse = {};
        
        //Id of the test result
        vm.testResultId;
        vm.testResult;

        vm.login = function () {

            //check user data to be sent
            console.log(vm.user);



            //Get response from server
            vm.loginResponse = testAPI.login(vm.user).then(function (data) {
                //save response in model property
                vm.loginResponse = data.data;
                //Check if the server sent token 
                vm.user.login(vm.loginResponse)
            });
            
        }/*login*/


        



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
            
            console.log(vm.request);
                       
            testAPI.submitTestAnswers(vm.request)
                .then(function (data) {
                    vm.testResultId = data.data.id;
                    
                    testAPI.getTestResult(vm.testResultId)
                        .then(function(data){
                            console.log(data);
                        });
                });
                
            }/*Submit answers*/
            
            
            
            
            
            
            
            

        }/*controller*/
    

    
})()