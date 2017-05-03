

function ProjectControllerFN($scope,Project){
    $scope.projects=Project.query();
    $scope.project=new Project();
   $scope.projectIndex=-1;
   /* var project = Project.get({ id: $scope.id }, function() {
	
    console.log(project);
  }); */
  
    $scope.selectProject=function(project,index){
         $scope.projectIndex=index;
        console.log(project);
        $scope.project=project;
    }
    $scope.save=function(){
        if($scope.projectIndex!=null){
            $scope.project.$update($scope.project.id);
        }
        else{
            $scope.projects.push($scope.project);
            $scope.project.$save();
        }
        
        
    }
    
     $scope.delete=function(){
        $scope.projects.splice($scope.projectIndex,1);
        $scope.project.$remove(function(){
            $scope.project=new Project();
        });
    }
    $scope.reset=function(){
        $scope.project=new Project();
    }
  /*$scope.get=function(){
	  $scope.project.$get($scope.project.id);
  }*/
  
   $scope.search=function(){
        
 $scope.project=Project.get({id:$scope.project.id}, function(project) {
$scope.project.name=$scope.project.name;
 console.log(project.name);
});
            }


  
  
  
  
  
  
  
  
  
  
}

angular
    .module("app")
    .controller("ProjectController",ProjectControllerFN)
//http://localhost/angularpidev/index.html#/projects