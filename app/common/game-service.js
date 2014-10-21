angular.module('game-service', [])

    .service('gameService', function GameService($http, BaseUrl){
        var gameService = this;
        gameService.someProperty = "Hello";
        //gameService.url = "http://localhost:3000/";

        gameService.getGameDetail = function(gameId){
            return $http.get(BaseUrl + "game/" + gameId)
                .then(function(res){
                    return res.data;
                });
        }

        gameService.getImageUrl = function(game){
            if(!game) return;
            return BaseUrl + game.image;
        }

        gameService.getThumbnailUrl = function(game){
            if(!game) return;
            return BaseUrl + game.thumbnail;
        }


        gameService.getGames = function(){
            return $http.get(BaseUrl + "game")
            .then(function(res){
                    return res.data;
                });
        }
    });