(function () {
    angular.module('app')
        .controller('allTestsController', ['$q', 'testAPI', allTestsController]);
        
    function allTestsController($q, testAPI) {
        var vm = this;
        
        vm.message = "Hello World!";
        
        vm.allTests = [];
        
        
        getAllTests().then(function (data) {
            vm.allTests = data;
        });
 
        
        function getAllTests() {
            
           return testAPI.getAllTests()
               .then(function (data) {
              
                    var tests = data.data;

                    tests.forEach(function (test) {
                  
                        testAPI.getTestQuestions(test.id)
                            .then(function (questions) {
                          
                                test.questions = questions.data;
                                test.questions.forEach(function (question) {
                              
                                    testAPI.getQuestionAnswers(question.id)
                                        .then(function (answers) {
                                
                                            question.answers = answers.data;
                                
                                        });
                                })
                            });
                    });
              
                    return tests;
               
               }); 
            
        }/*end getAllTests()*/
        
        
       
        
         function getAllTests_v2() {
            
           return testAPI.getAllTests()
               .then(function (tests) {
                  return tests.data;
                })
               .then(function(tests){
                    tests.forEach(function (test) {
                        testAPI.getTestQuestions(test.id)
                            .then(function (questions){
                                test.questions = questions.data;
                                return test.questions;
                            })
                            .then(function(questions){
                                questions.forEach(function(question){
                                    testAPI.getQuestionAnswers(question.id)
                                        .then(function(answers){
                                            question.answers = answers.data;
                                        });
                                });
                            });
                    });/*end tests.forEach*/
                    return tests;
               });     
        }/*end getAllTests_v2()*/  
    }
    
})()