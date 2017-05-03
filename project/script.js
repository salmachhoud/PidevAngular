// Code goes here



function MyControllerFN($scope,Project) {

   var list=Project.query();
$scope.projects=[];
 $scope.projects=Project.query();
    $scope.projects.$promise.then(function(data) {
       console.log(data);
   });
   // angular.toJson($scope.projects) ;
    //console.log($scope.projects);
      
  $scope.currentPage = 1;
  $scope.pageSize = 5;
 // $scope.meals = [];
//console.log($scope.meals);
/* var dishes = [
    'developpement',
    
    'Software'
  ];
  var sides = [
    'webbbbbb',
    'mobile',
    'JEE',
    'java',
    'Asp.Net',
    'Angular',
    'Symfony',
    'PHP5 CSS3 HTML5',
  
  ];
  for (var i = 1; i <= 10; i++) {
   var dish = dishes[Math.floor(Math.random() * dishes.length)];
    var side = sides[Math.floor(Math.random() * sides.length)];
    $scope.meals.push('Project ' + i + ': ' + dish + ' ' + side);
  }*/
  /* for(var i=0; i<=list.length;i++){
        $scope.projects.push(list.indexOf(i).name);
      
    };*/
  
  $scope.pageChangeHandler = function(num) {
      console.log('projects page changed to ' + num);
  };
}

function OtherController($scope) {
  $scope.pageChangeHandler = function(num) {
   console.log('going to page ' + num);
 };
}
/*var ctrl= function($scope){
    $scope.message="hello";
};*/
app
.controller('MyController', MyControllerFN)
.controller('OtherController', OtherController);
/*.controller("myCtrl",ctrl);*/




