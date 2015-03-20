describe('todoListController', function() {
  beforeEach(module('todoList'));

  var scope, ctrl;

  beforeEach(inject(function($rootScope, $controller) {
    scope = $rootScope.$new();
    ctrl = $controller('todoListController', {
        $scope: scope
    });
    }));

    it('initialises with an empty search result and term', function() {
      expect(scope.searchResult).toBeUndefined();
      expect(scope.searchTerm).toBeUndefined();
    });
});