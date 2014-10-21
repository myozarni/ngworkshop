angular.module('workshop.detail', [])
    .config(function($stateProvider){
        $stateProvider
            .state('detail', {
                url: '/detail/:id',
                controller: 'DetailCtrl as detail',
                templateUrl: 'app/detail/detail.html'
            })
    })
    .controller('DetailCtrl', function DetailCtrl($stateParams, gameService){
        var detail = this;
        //detail.url = "http://localhost:3000/";
        detail.selectedGame = null;

        gameService.getGameDetail($stateParams.id).then(function(game){
            detail.selectedGame = game;
        })

//        detail.getImageUrl = function(game){
//            if(!game) return;
//            return BaseUrl + game.image;
//        }

        detail.getImageUrl = gameService.getImageUrl;

        detail.whatever = function(){
            console.log("Logged from the controller");
        }


    })