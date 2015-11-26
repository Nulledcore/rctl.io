(function () {
    'use strict';

    angular
        .module('rasmusj.se')
        .controller('nettcputility', nettcputility);

    nettcputility.$inject = ['$scope'];

    function nettcputility($scope) {
        $scope.title = '.NET TCP Utility';

        activate();

        function activate() { }
    }
})();
