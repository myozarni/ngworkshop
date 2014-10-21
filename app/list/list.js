angular.module('workshop.list', [])
    .config(function($stateProvider){
        $stateProvider
            .state('list', {
                url: '/list',
                controller: 'ListCtrl as list',
                templateUrl: 'app/list/list.html'
            })
    })
    .controller('ListCtrl', function ListCtrl(gameService){
        var list = this;
        //list.url = "http://localhost:3000/";
        list.searchTerm = "";
        //"http://j.mp/euroegg"
        list.selectedGame = "";

        list.sortBy = function(selection){
            if(list.orderSelection === selection)
            {
                list.orderSelection = "-" + list.orderSelection;
            }
            else
            {
                list.orderSelection = selection;
            }
        }



        list.getThumbnailUrl = gameService.getThumbnailUrl;


        gameService.getGames().then(function(res){
            list.games = res;
        });

//        list.getThumbnailUrl = function(game){
//            if(!game) return;
//            return BaseUrl + game.thumbnail;
//        }

//        $http.get(BaseUrl + "game")
//            .then(function(res){
//                list.games = res.data;
//            });
    })