(function () {
    'use strict';

    angular
        .module('rasmusj.se')
        .controller('quicklink', quicklink);

    quicklink.$inject = ['$scope'];

    function quicklink($scope) {
        $scope.title = 'Quick Link';

        activate();

        function activate() { }
    }
})();
