var app = angular.module("commentSystem",[]);

app.controller("chatCtrl",function($scope){

    $scope.test="chaitra";
    $scope.cList=[
    "This is the first commnet",
    "Here's the second comment",
    "And this is one More",
    "Here is another one"]; 

    $scope.addComment = function(){
        if($scope.input== null){
            window.alert("No comments yet , pls insert one");
        }else{
            $scope.cList.push($scope.input);
        }
    }
});


