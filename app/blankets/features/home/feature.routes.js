angular
    .module('blankets.home')
    .config(homeConfig);

function homeConfig($stateProvider) {
    $stateProvider.state({
        name: 'home',
        url: '/',
        templateUrl: '/appname/features/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'HomeVM'
    })
}