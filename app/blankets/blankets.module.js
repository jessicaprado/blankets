angular
    .module('blankets', [
        //global dependencies
        'ui.router',

        //features
        'blankets.home',
    ])
    .config(appConfig);

function appConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
}