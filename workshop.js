angular.module("workshop", [
    'ui.router',
    'workshop.list',
    'workshop.detail',
    'game-service',
    'components'
])
    .constant('BaseUrl', 'http://localhost:3000/')
    .config(function($urlRouterProvider){

        $urlRouterProvider.otherwise('/list');
    })
