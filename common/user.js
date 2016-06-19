(function () {

    angular.module("app.commonServices")
        .factory('user', user);

    function user() {
        return {
            firstName: "Yuri-777",
            secondName: "V",
            phone: "777-77-77",
            email: "ertert@erter.com",
            password: "4545123122",
            isLoggedIn: true
        };

    }

})();