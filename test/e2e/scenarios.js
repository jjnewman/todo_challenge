  describe('To do list view', function() {

    beforeEach(function() {
      browser.get('http://localhost:8080/app/index.html');
    });

    it('should add an item when a user presses the Add button', function() {
      var enterItem = element(by.model('enterItem'));
      var pressAdd = element(by.model('addItem'));
      var todoList = element.all(by.repeater('item in itemsList'));
      enterItem.sendKeys('Walk dog');
      expect(todoList.count()).toEqual(2);
      pressAdd.click();
      expect(todoList.count()).toEqual(3);
      expect(todoList.get(2).getText()).toEqual('Walk dog');
    });

    it('should display the total number of tasks', function() {
      var itemCount = element(by.binding('countItems'));
      var enterItem = element(by.model('enterItem'));
      var pressAdd = element(by.model('addItem'));
      enterItem.sendKeys('Walk dog');
      pressAdd.click();
      expect(itemCount.getText()).toEqual("3");
    });

    it('should be able to mark a task as completed', function() {
      element.all(by.repeater('item in itemsList')).then(function(itemsList) {
        var markComplete = itemsList[1].element(by.model('item.completed'));
        var item = itemsList[1].element(by.repeater('item in itemsList'));
        markComplete.click();      
        expect(item.completed()).toBe(true);
      });
    });
});
