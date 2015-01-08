ddescribe('automobile create, read, update, delete', function () {
  beforeEach(function () {
    browser.get('/');
  });

  it('should allow users to add an automobile', function () {
    element(by.linkText('Automobiles')).click();
    element(by.model('automobile.make')).sendKeys('Fiat');
    element(by.model('automobile.model')).sendKeys('500L');
    element(by.model('automobile.year')).sendKeys('1972');
    element(by.css("input[type='submit']")).click();
    var children = element.all(by.css('.group')).all(by.css('.child'));
    expect(children.getText()).toContain('Fiat');
    expect(children.getText()).toContain('500L');
    expect(children.getText()).toContain('1972');
  });
});