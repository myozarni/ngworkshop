angular.module('todos', ['ui.bootstrap'])


    .controller('TodoController', function() {
        var app = this;
        app.todos = "";
        app.filteredTodos = []
            ,app.currentPage = 1
            ,app.numPerPage = 10
            ,app.maxSize = 5;

        app.makeTodos = function() {
            app.todos = [];
            for (i=1;i<=1000;i++) {
                app.todos.push({ text:'todo '+i, done:false});
            }
        };
        app.makeTodos();

        app.numPages = function () {
            return Math.ceil(app.todos.length / app.numPerPage);
        };

        app.$watch('currentPage + numPerPage', function() {
            var begin = ((app.currentPage - 1) * app.numPerPage)
                , end = begin + app.numPerPage;

            app.filteredTodos = app.todos.slice(begin, end);
        });
    });