(function () {

    "use strict";

    angular.module('app')
        .controller('testController', ['singleTest', 'testAPI', 'user', testController]);

    function testController(singleTest, testAPI, user) {
        var vm = this;

        vm.user = user;


        vm.test = singleTest;

        console.log(vm.test);

        vm.multiAnswers = [];
        vm.singleAnswers = [];
        
        
        
        


        vm.answerComplete =
{
	"header": {
		"fName": "Yuri-777",
		"sName": "V",
		"phone": "777-77-77",
		"email": "a@a.com"
	},
	"answers": [{
		"test": 5,
		"question": 4,
		"answer": 3
	}, {
		"test": 5,
		"question": 5,
		"answer": 4
	}, {
		"test": 5,
		"question": 6,
		"answer": 1
	}]
}

        var user = {
            fName: "Yuri-777",
		    sName: "V",
		    phone: "777-77-77",
		    email: "a@a.com"
        }

/*var x = {"header":{"fName":"Yuri-777","sName":"V","phone":"777-77-77","email":"a@a.com"},"answers":[{"test":5,"question":5,"answer":8},{"test":5,"question":5,"answer":10},{"test":5,"question":5,"answer":12},{"test":5,"question":9,"answer":27},{"test":5,"question":9,"answer":30},{"test":5,"question":4,"answer":5},{"test":5,"question":6,"answer":14},{"test":5,"question":7,"answer":21},{"test":5,"question":8,"answer":26},{"test":5,"question":13,"answer":47}]};
  */     





        vm.submitAnswers = function () {
            
            var request = {
                header: user,
                answers:  _.compact(_.concat(vm.multiAnswers, vm.singleAnswers))
            }
            
            request = JSON.stringify(request);
            
            var response = testAPI.submitTestAnswers(request)
                .then(function (response) {
                    console.log(response);
                });
        }



    }
})()