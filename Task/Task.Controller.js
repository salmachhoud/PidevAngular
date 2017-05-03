function TaskControllerFN($scope,Task){
    $scope.tasks=Task.query();
 
    $scope.TaskFrom=new Task();
    $scope.selectIndex=null;
    
    
    $scope.selectTask=function(t,index){
        console.log(t);
        $scope.TaskFrom=t;
        $scope.selectIndex=index;
	
    }
    $scope.save=function(){
        if($scope.selectIndex!=null){
            $scope.TaskFrom.$update($scope.TaskFrom.id);
        }else{
            $scope.tasks.push($scope.TaskFrom);
            $scope.TaskFrom.$save(
            function(){
                $scope.TaskFrom=new Task();
            }
            
            );
        }
    }
	$scope.delete=function(){
        $scope.tasks.splice($scope.selectIndex,1);
        $scope.TaskFrom.$remove(
        function(){
            
        $scope.TaskFrom=new Task();
        });
    }
    $scope.reset=function(){
        $scope.TaskFrom=new Task();
    }
    
    
 $scope.get=function(){
 $scope.task=Task.get({id:$scope.task.id}, function(task) {
 $scope.task.name=$scope.task.name;
 
});
            }
    
    
    
}

angular
    .module("app")
    .controller("TaskController",TaskControllerFN)