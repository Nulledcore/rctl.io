(function () {
    'use strict';

    angular
        .module('rasmusj.se')
        .controller('rtek', rtek);

    rtek.$inject = ['$scope']; 

    function rtek($scope) {
        $scope.title = 'rtek';

        activate();

        function activate() { }
    }
})();
