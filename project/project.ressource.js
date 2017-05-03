function ProjectFN($resource){
    var url="http://localhost:18080/piPMT-web/rest/project/:id";
    var params={id:"@id"};
    
var customMethods={'update':{method:"PUT",params:{id:null}}};
   // var customMethods={'get':{method:"GET",isArray:false}};
  //  var Car=$resource(url,params,customMethods);
    var Project=$resource(url,params,customMethods);
    return Project;    
}
//ProjectFN.$inject=["$resource"];
app.factory("Project",ProjectFN);
