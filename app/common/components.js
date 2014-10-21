angular.module("components", [])
    .directive("container", function(){
        return {
            transclude: true,
            template: "<div style='border:2px solid red;'>Header<div ng-transclude></div>Footer</div>"
        }
    })
    .directive("card", function(){
        return {
            priority: 5000,
            scope: {
                imageUrl : "@",
                message: "@",
                game: "=",
                updateFavourite: "&"
            },
            templateUrl: "app/common/templates/card.html",
            link: function(scope, elm, attrs){
                console.log(attrs);
            }
        }
    });