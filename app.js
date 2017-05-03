angular.module("app",["ngRoute","ngResource",'angularFileUpload','angularUtils.directives.dirPagination'])

function configFN($routeProvider){
    $routeProvider
        .when('/Task',{
            controller:"TaskController",
            templateUrl:"Task/Task.View.html"
        })
    .when('/upload',{
        controller:"AppController",
         templateUrl:"examples/image-preview/index.html"
        })
     .when('/projects',{
            controller:"ProjectController",
            templateUrl:"project/project.view.html"
        })
	.when('/pagin',{
            
            templateUrl:"project/index1.html"
        })
    .otherwise({redirectTo:"/projects"});
}
configFN.$inject=['$routeProvider'];

angular.module("app").config(configFN);




