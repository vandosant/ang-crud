describe('app home', function () {
  it('should work', function () {
    browser.get('http://localhost:3000/');
    result = element(by.css('.hello'));
    expect(result.getText()).toEqual('hello');
  });

  it('should allow users to add an article', function () {
    browser.get('http://localhost:3000/');
    element(by.model('article.url')).sendKeys('http://test.com');
    submit = element(by.css('input[type="submit"'));
    submit.click();
    urls = element.all(by.repeater('a in articles'));
    expect(urls.count()).toBe(1);
  });
});