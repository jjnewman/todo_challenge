describe('todoListController', function() {
  beforeEach(module('todoList'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('todoListController', {
        $scope: scope
    });
    }));

     it('has two items on initiation', inject(function() {
      expect(scope.itemsList.length).toBe(2);
      }));

     it('can add an item to the list', inject(function() {
      expect(scope.itemsList.length).toBe(2);
      scope.addItem("Bob");
      expect(scope.itemsList.length).toBe(3);
      }));

     it('can count the total number of tasks', inject(function(){
      expect(scope.countItems()).toBe(2);
      scope.addItem("Bob");
      expect(scope.countItems()).toBe(3);
     }));

     it('can mark a task as completed', inject(function(){
      scope.addItem("Bob");
      scope.itemsList[2].completed=true;
      expect(scope.itemsList[2].completed).toBe(true);
     }));

     it('should be able to count the number of completed tasks', inject(function(){
      expect(scope.countOutstanding()).toBe(1);
      scope.itemsList[1].completed=true;      
      expect(scope.countOutstanding()).toBe(0);
     }));

     it('should be able to delete tasks', inject(function(){
      expect(scope.countItems()).toBe(2);
      scope.removeItem(scope.itemsList[0]);    
      expect(scope.countItems()).toBe(1);
     }));


});




