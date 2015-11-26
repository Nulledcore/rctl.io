(function () {
    'use strict';

    angular
        .module('rasmusj.se')
        .controller('pgpid', pgpid);

    pgpid.$inject = ['$scope'];

    function pgpid($scope) {
        $scope.title = 'PGP ID';

        activate();

        function activate() { }
    }
})();
