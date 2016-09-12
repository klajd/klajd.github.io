(function () {
    'use strict';

    angular
        .module('me', [])
        .run(AppStart);

    AppStart.$inject = ['$rootScope'];
    function AppStart(vm) {
        vm.me = {
            name: 'Klajd Diko',
            avatar: 'https://www.gravatar.com/avatar/2c0318fca160ac293089d281ffb45669?s=200',
            work: 'Software & Web Developer',
            mail: 'klajd.diko@gmail.com',
            linkedin: 'https://www.linkedin.com/in/klajddiko',
            github: 'https://github.com/klajd"'
        };
    }

})();
