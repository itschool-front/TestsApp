(function () {
    angular.module('app')
        .controller('main', main);
        
    function main() {
        var vm = this;
        
        vm.message = "Hello World!";
    }
})()