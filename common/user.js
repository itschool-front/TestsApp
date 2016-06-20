(function () {

    angular.module("app.commonServices")
        .factory('user', user);

    function user() {
        
        var isLoggedIn = true;
        
        return {
            firstName: "Иван",
            lastName: "Иванов",
            phone: "777-77-77",
            email: "ertert@erter.com",
            password: "4545123122",
            
            isLoggedIn: function () {
                return isLoggedIn;
            },
            
            login: function (loginResponse) {
               isLoggedIn = loginResponse.token ? true : false;
               return isLoggedIn;
            }
        };

    }

})();