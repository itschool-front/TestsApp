(function () {
    "use strict";

    angular.module('app', ['app.commonServices', 'ui.router',  'app.login', 'perfect_scrollbar' /*, 'app.testAPIMock'*/])
        .config(function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise("/welcome");

            $stateProvider
                
                .state('app.available', {
                    url: '/available',
                    templateUrl: "app/available/available.html",
                    controller: "availableController as vm",
                     resolve: {
                        
                        
                        testsAvailableId: function (testAPI) {
                            return testAPI.getTestsAvailable().then(function (data) {
                                return data.data;
                            });
                        },
                        

                        testsAvailable: function ($q, testAPI, testsAvailableId) {

                            var tests = [];

                            testsAvailableId.forEach(function (testId) {
                                
                                var singleTest = testAPI.getSingleTest(testId)
                                    .then(function (test) {
                                       
                                       test.data.questions.forEach(function (question) {
                                            testAPI.getQuestionAnswers(question.id)
                                                .then(function (answers) {
                                                    question.answers = answers.data;
                                                });
                                        });
                                        
                                        return test;
                                        
                                    });
                                    
                               tests.push(singleTest)

                            });

                            return $q.all(tests);

                        }
                    }
                   
                })
                

                .state('welcome', {
                    url: '/welcome',
                    views: {
                        "header": { templateUrl: "app/partials/header.html" },
                        "content": { templateUrl: "app/partials/welcome.html", controller: "welcomeController as vm" }
                    },
                    
                })
                
              
                .state('app', {
                    url: '/app',
                    views: {
                        "header": { templateUrl: "app/partials/header.html" },
                        "content": { templateUrl: "app/partials/content.html" }
                    }
                })
                
                
                .state('app.login', {
                    url: '/login',
                    templateUrl: 'app/login/login.html',
                    controller: "loginController as vm"
                   
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

                        singleTest: function (testAPI, $stateParams) {
                            return testAPI.getSingleTest($stateParams.testId)
                                .then(function (test) {

                                    test.data.questions.forEach(function (question) {
                                        testAPI.getQuestionAnswers(question.id)
                                            .then(function (answers) {
                                                question.answers = answers.data;
                                            });
                                    });

                                    return test.data;
                                });
                        }
                    }

                })//stste app.test end

              /* .state('app.available', {
                    url: "/available",
                    templateUrl: "app/available/available.html",
                    controller: "availableController as vm",

                    resolve: {
                        
                        
                        testsAvailableId: function (testAPI) {
                            return testAPI.getTestsAvailable().then(function (data) {
                                return data.data;
                            });
                        },
                        

                        testsAvailable: function ($q, testAPI, testsAvailableId) {

                            var tests = [];

                            testsAvailableId.forEach(function (testId) {
                                
                                var singleTest = testAPI.getSingleTest(testId)
                                    .then(function (test) {
                                       
                                       test.data.questions.forEach(function (question) {
                                            testAPI.getQuestionAnswers(question.id)
                                                .then(function (answers) {
                                                    question.answers = answers.data;
                                                });
                                        });
                                        
                                        return test;
                                        
                                    });
                                    
                               tests.push(singleTest)

                            });

                            return $q.all(tests);

                        }
                    }
                });*/
        });


})()