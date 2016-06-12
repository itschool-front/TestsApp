(function () {
    angular.module('app.commonServices')
        .factory('apiResponseTransform', apiResponseTransform);
    
    
    /**
     * Transforms API responses to more suitable form,
     * removes all unused stuff, turns objects into arrays
     */
    
        
    function apiResponseTransform(){
      
        return { 
            
            
            getAllTests: 
                function(APIResponse){
                    var response = JSON.parse(APIResponse);
                    
                    if(response.length){
                        response = _.map(response, function(test){
                            return { description: test.description, id: test.id};
                        });
                    }
                    
                    return response;
                },
                
              
             getTestQuestions:
                function(APIResponse){
                   
                    var response = JSON.parse(APIResponse);
                    
                    var questions = _.map(response.questions, function(question){
                        return {
                                id: question.id,
                                description: question.description, 
                                answerType: question.answerType,
                                picture: question.pictureFd
                            };
                    });
                    
                    return questions;
                },
                
                
                
             getSingleTest:
                function(APIResponse){
                   
                    var response = JSON.parse(APIResponse);
                    
                    var questions = _.map(response.questions, function(question){
                        return {
                                id: question.id,
                                description: question.description, 
                                answerType: question.answerType,
                                picture: question.pictureFd
                            };
                    });
                    
                    return {
                        description: response.description,
                        id: response.id,
                        questions: questions
                    };
                },
                
            
            
             getQuestionAnswers:
                function(APIResponse){
                    var response = JSON.parse(APIResponse);
                    
                    var answers = _.map(response.answers, function(answer){
                        return answer.description;
                    });
                    
                    return answers;
                }
        };
        
        
        
    }
    
})()