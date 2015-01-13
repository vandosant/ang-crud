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

  it('should allow users to update an automobile', function() {
    // create and view the automobile
    element(by.linkText('Automobiles')).click();
    element(by.model('automobile.make')).sendKeys('Chevrolet');
    element(by.model('automobile.model')).sendKeys('Monte Carlo');
    element(by.model('automobile.year')).sendKeys('1987');
    element(by.css("input[type='submit']")).click();
    // update the automobile
    element(by.linkText('Chevrolet Monte Carlo')).click();
    element(by.linkText('Edit')).click();
    element(by.model('automobile.make')).clear();
    element(by.model('automobile.make')).sendKeys('Chevy');
    element(by.css('input[type="submit"]')).click();
    var children = element.all(by.css('li'));
    expect(children.getText()).toContain('Chevy');
    expect(children.getText()).not.toContain('Chevrolet');
  });
});