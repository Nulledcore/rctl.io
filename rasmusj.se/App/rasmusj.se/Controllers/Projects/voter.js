(function () {
    'use strict';

    angular
        .module('rasmusj.se')
        .controller('voter', voter);

    voter.$inject = ['$scope'];

    function voter($scope) {
        $scope.title = 'Voter';

        activate();

        function activate() { }
    }
})();
