describe('app home', function () {
  it('should work', function () {
    browser.get('http://localhost:3000/');
    result = element(by.css('.hello'));
    expect(result.getText()).toEqual('hello');
  });

  it('should allow users to add an article and view its show page', function () {
    browser.get('http://localhost:3000/');
    element(by.model('article.url')).sendKeys('http://test.com');
    submit = element(by.css('input[type="submit"'));
    submit.click();

    element.all(by.css("a")).last().then(function(last) {
      last.click().then(function () {
        expect(browser.getCurrentUrl()).toContain('http://localhost:3000/#/articles');
      });
    });
  });

});