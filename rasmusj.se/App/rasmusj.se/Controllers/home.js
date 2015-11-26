(function () {
    'use strict';

    angular
        .module('rasmusj.se')
        .controller('home', home);

    home.$inject = ['$scope']; 

    function home($scope) {

        $scope.name = 'Rasmus Jönsson';
        $scope.telephone = '0705-71 70 38';
        $scope.email = 'rasmus@rasmusj.se';
        $scope.age = '20';
        $scope.city = 'Linköping';
        $scope.address = 'Sörgårdsgatan 7';
        $scope.postalcode = '586 45';
        $scope.occupation = 'Systemutvecklare på RTEK';
        $scope.school = 'Civilingenjör inom IT vid Linköpings universitet';
        $scope.picture = 'https://www.rasmusj.se/2014/asset/img/rasmus2.jpg';

        $scope.bio = 'Social person med många bollar i luften. Driver projekt på fritiden och har ett stort intresse för foto och media.';

        $scope.social = [
            { title: "Facebook", url: "https://facebook.com/rasmusj.se", icon: "facebook.png" },
            { title: "GitHub", url: "https://github.com/rasmusj-se", icon: "github.png" },
            { title: "Google+", url: "https://google.com/+RasmusJönsson", icon: "google.png" }
        ];

        $scope.links = [
            { title: "Mitt företags hemsida", url: "https://rtek.se/", icon: "" }
        ];

        $scope.cards = [ //color = panel-[danger/info/primary/success]
            { title: "Om den nya hemsidan", color: "panel-primary", text: "Den nya hemsidan är publicerad. Den är byggd på AngularJS och NancyFX. Detta innebär utökade möjligheter för bättre publicering och uppdatering av mina projekt." }
        ];

        $scope.projects = [
            { title: "PGP ID", sref: "projects.pgpid", href: "", bio: "PGP ID är en applikation som låter utvecklare bygga system som autentiserar användare med hjälp av PGP certfikat och sin android telefon." },
            { title: "Voter", sref: "projects.voter", href: "", bio: "Voter är en androidapplikation som tillåter användare att skapa röstomgångar och sedan låta andra rösta i dessa via appen eller SMS." },
            { title: "QuickLink", sref: "projects.quicklink", href: "", bio: "QuickLink är början på att utveckla ett P2P distribuerat nätverk i .NET. Det är byggt som ett bibilotek och ska vara enkelt att dra igång, underhållar och ska ha en leveransgaranti på de meddelandes som skickats." },
        ];

        activate();

        function activate() {
            
        }
    }
})();
