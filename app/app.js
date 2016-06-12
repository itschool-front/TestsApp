(function () {
    "use strict";
    
    angular.module('app', ['app.commonServices', 'ui.router'])
        .config(function ($stateProvider, $urlRouterProvider) {
         
           $urlRouterProvider.otherwise("/app");
            
            $stateProvider
            
                .state('welcome', {
                   url: '/welcome',
                   views: {
                       "header": {templateUrl: "app/partials/header.html"},
                       "content": {templateUrl: "app/partials/welcome.html"}
                   } 
                })
                
                .state('app', {
                   url: '/app',
                   views: {
                       "header": {templateUrl: "app/partials/header.html"},
                       "content": {templateUrl: "app/partials/content.html"}
                   } 
                })
                
                .state('app.alltests', {
                    url: '/alltests',
                    templateUrl: 'app/alltests/alltests.html',
                    controller: "allTestsController as vm"
                })
                
                .state('app.test', {
                    url: '/test/:testId',
                    templateUrl: "app/test/test.html",
                    controller: "testController as vm",
                    
                    resolve: {
                        testAPI: 'testAPI',
                        
                        singleTest: function(testAPI, $stateParams){
                           return testAPI.getSingleTest($stateParams.testId)
                                    .then(function(test){
                                        
                                        test.data.questions.forEach(function(question){
                                                testAPI.getQuestionAnswers(question.id)
                                                    .then(function(answers){
                                                      question.answers = answers.data;
                                                    });
                                         }); 
                                            
                                         return test;           
                                    });
                                        
                        
                    
                
            
                         }
                    }
                   
                });//stste app.test end
        });
    
    
})()