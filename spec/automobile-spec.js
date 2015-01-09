ddescribe('automobile create, read, update, delete', function () {
  beforeEach(function () {
    browser.get('/');
  });

  it('should allow users to add an automobile and view its details', function () {
    element(by.linkText('Automobiles')).click();
    element(by.model('automobile.make')).sendKeys('Fiat');
    element(by.model('automobile.model')).sendKeys('500L');
    element(by.model('automobile.year')).sendKeys('1972');
    element(by.css("input[type='submit']")).click();
    var children = element.all(by.css('.group')).all(by.css('.child'));
    expect(children.getText()).toContain('Fiat 500L');
    element(by.linkText('Fiat 500L')).click();
    children = element.all(by.css('li'));
    expect(children.getText()).toContain('1972');
  });
});