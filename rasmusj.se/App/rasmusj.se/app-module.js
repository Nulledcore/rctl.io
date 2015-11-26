(function () {
    'use strict';

    var app = angular.module('rasmusj.se', ['ui.bootstrap', 'ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

        //Navigation settings

        $urlRouterProvider.when('', '/');
        $urlRouterProvider.otherwise('/404');
        $locationProvider.html5Mode(false);

        $stateProvider
            
            //Page Modules
            .state('default', {
                url: '/',
                templateUrl: '/App/rasmusj.se/Templates/home.html',
                controller: 'home'
            })

            
            .state('rtek', {
                url: '/rtek',
                templateUrl: '/App/rasmusj.se/Templates/rtek.html',
                controller: 'rtek'
            })

        
            .state('projects', {
                url: '/projects',
                abstract: true, 
                template: '<ui-view/>'
            })

            //Project Modules

            .state('projects.quicklink', {
                url: '/quicklink',
                templateUrl: '/App/rasmusj.se/Templates/Projects/quicklink.html',
                controller: 'quicklink'
            })

            .state('projects.pgpid', {
                url: '/pgpid',
                templateUrl: '/App/rasmusj.se/Templates/Projects/pgpid.html',
                controller: 'pgpid'
            })

            .state('projects.voter', {
                url: '/voter',
                templateUrl: '/App/rasmusj.se/Templates/Projects/voter.html',
                controller: 'voter'
            })

            .state('projects.nettcputility', {
                url: '/nettcputility',
                templateUrl: '/App/rasmusj.se/Templates/Projects/nettcputility.html',
                controller: 'nettcputility'
            })
        ;

    }]).controller('main', function ($scope) {

        $scope.projects = [
            { title: "Quick Link", sref: "projects.quicklink" },
            { title: "PGP ID", sref: "projects.pgpid" },
            { title: "Voter", sref: "projects.voter" },
            { title: ".NET TCP Utility", sref: "projects.nettcputility" }
        ];

        //Menu items

        $scope.menuItems = [
            { title: 'Hem', sref: 'default', url: '#', subitems: [] },
            { title: 'Till mitt företag', sref: '', url: 'https://www.rtek.se/', subitems: [] },
            { title: 'Mina projekt', sref: 'projects', url: '#', subitems: $scope.projects }
        ];

        //App settings

        $scope.brand = "Rasmus Jönsson";

        $scope.title = "Rasmus Jönsson - www.rasmusj.se";

        $scope.appUrl = "https://www.rasmusj.se/";

        $scope.footer = "";

        Init();

        //Initialize

        function Init() {
            $(document).ajaxError(function () {
                AddAlert('error', 'Ett anrop misslyckades, var god försök igen.');
            });
        };

        //Methods

        $scope.alerts = [
        ];

        $scope.AddAlert = function (_type, _msg) {
            $scope.alerts.push({ type: _type, msg: _msg });
        };

        $scope.closeAlert = function (index) {
            $scope.alerts.splice(index, 1);
        };

        $scope.Navigate = function (url) {

        };

    });


})();