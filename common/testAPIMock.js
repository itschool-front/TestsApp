(function () {
    angular.module('app.testAPIMock', ['ngMockE2E'])
        .run(function ($httpBackend) {

            
            $httpBackend.whenPOST('http://itschool.ocr-service.net:1337/passedTest/create/')
            .respond(function (method, url, data) {
                                
                data = '{  "fName": "Yuri-777",  "sName": "V",  "phone": "777-77-77",  "email": "a@a.com",  "id": 44,  "createdAt": "2016-06-01T07:25:47.000Z",  "updatedAt": "2016-06-01T07:25:47.000Z"}';
                
                return [200, data, {}];
            });
            
            $httpBackend.whenGET(/app/).passThrough();
            $httpBackend.whenGET(/test/).passThrough();
            $httpBackend.whenGET(/question/).passThrough();


        });
})();