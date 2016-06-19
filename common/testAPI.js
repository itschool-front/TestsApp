(function name(params) {
    
    angular.module("app.commonServices")
        .factory('testAPI', ['$q', '$http', 'appSettings', 'apiResponseTransform', testAPI]);
        
    function testAPI($q, $http, appSettings, apiResponseTransform){
        
        return { 
            
            login: function( user ){
                
                console.log(user);
                return $http({method: 'POST',
                                 url: appSettings.APIBaseURL + '/login',
                                data: user/*{
                                   email: user.email,
                                   password: user.password
                               }*/
                    });  
            },
            
            
            
            getAllTests: function () {
                return $http({ method: 'GET', 
                                  url: appSettings.APIBaseURL + '/test',
                    transformResponse: apiResponseTransform.getAllTests 
                 });
            },
            
            
            getTestsAvailable: function () {
                return $http({ method: 'GET', 
                                  url: appSettings.APIBaseURL + '/test/available/',
                    transformResponse: apiResponseTransform.getTestsAvailable 
                 });
            },
            
            
            getTestQuestions: function (id) {
                return $http({ method: 'GET', 
                                  url: appSettings.APIBaseURL + '/test/' + id,
                    transformResponse: apiResponseTransform.getTestQuestions 
                 });
            },
            
             getSingleTest: function (id) {
                return $http({ method: 'GET', 
                                  url: appSettings.APIBaseURL + '/test/' + id,
                    transformResponse: apiResponseTransform.getSingleTest
                 });
            },
            
         
            getQuestionAnswers: function (id) {
                return $http({ method: 'GET', 
                                  url: appSettings.APIBaseURL + '/question/' + id,
                    transformResponse: apiResponseTransform.getQuestionAnswers 
                 });
            },
           
            submitTestAnswers: function (answers) {
                
                console.log(answers);
                
                var r = $http({ method: 'POST', 
                                  url: appSettings.APIBaseURL + '/passedTest/create/',
                                 data: answers 
                 });
                
                console.log(r);
                return r;
        
             }, 
             
             getTestResult: function (id) {
                 return $http({
                     method: 'POST',
                        url: appSettings.APIBaseURL + '/passedTest/getResult',
                     params: {id: id}
                 });
             } 
            
        }
    }
        
})()