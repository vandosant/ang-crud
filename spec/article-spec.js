describe('app home', function () {
  beforeEach(function() {
    browser.get('/');
  });

  it('should allow users to add an article and view its show page', function () {
    element(by.model('article.url')).sendKeys('http://test.com');
    submit = element(by.css('input[type="submit"'));
    submit.click();

    element.all(by.css("a")).last().then(function (last) {
      last.click().then(function () {
        expect(browser.getCurrentUrl()).toContain('/#/articles');
      });
    });
  });

  it('should allow users to update an article', function () {
    element(by.model('article.url')).sendKeys('http://test.com');
    submit = element(by.css('input[type="submit"'));
    submit.click();

    element.all(by.css("a")).last().then(function (last) {
      last.click().then(function () {
        expect(browser.getCurrentUrl()).toContain('/#/articles');
      });
    });

    element(by.linkText('edit')).click();
    element(by.model('article.url')).clear();
    element(by.model('article.url')).sendKeys('http://updated.com');
    submit = element(by.css('input[type="submit"'));
    submit.click();

    expect(browser.getCurrentUrl()).not.toContain('edit');
    expect(element.all(by.cssContainingText('div', 'http://updated.com')).count()).toEqual(1);
  });

  it('should allow users to delete an article', function () {
    var randomNum = Math.floor(Math.random() * (1000));
    element(by.model('article.url')).sendKeys('http://test' + randomNum + '.com');
    submit = element(by.css('input[type="submit"'));
    submit.click();

    element.all(by.css("a")).last().then(function (last) {
      last.click().then(function () {
        expect(browser.getCurrentUrl()).toContain('/#/articles');
      });
    });

    element(by.linkText('delete')).click().then(function () {
      expect(browser.getCurrentUrl()).toContain('/#/home');
      expect(element.all(by.cssContainingText('div', 'http://test' + randomNum + '.com')).count()).toEqual(0);
    });
  });

  it('should validate the article url', function () {
    element(by.model('article.url')).sendKeys('not-a-url');
    submit = element(by.css('input[type="submit"'));
    submit.click();

    expect(element.all(by.cssContainingText('span', 'Error: Not a valid url!')).count()).toEqual(1);
  })
});