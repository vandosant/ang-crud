describe('app home', function () {
  beforeEach(function () {
    browser.get('/');
  });

  it('should work', function () {
    result = element(by.css('h1'));
    expect(result.getText()).toEqual('ang-crud');
  });
});