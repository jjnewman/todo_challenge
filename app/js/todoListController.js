manageList.controller('todoListController', function($scope) {
  
  $scope.itemsList = [
      {text:'walk dog', completed:true},
      {text:'buy milk', completed:false}];

  $scope.addItem = function(){
    $scope.itemsList.push({text:$scope.enterItem, completed:false});
  };

  $scope.countItems = function() {
    return $scope.itemsList.length;
  };

  $scope.countOutstanding = function() {
    var count = 0;
    angular.forEach($scope.itemsList, function(item) {
        count += item.completed ? 0 : 1;
      });
    return count;
  };

  $scope.removeItem = function(item){
    $scope.itemsList.splice($scope.itemsList.indexOf(item),1);
  };






 
});




