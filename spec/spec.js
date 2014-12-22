describe('app home', function () {
  it('should work', function () {
    browser.get('http://localhost:3000/');
    result = element(by.css('.hello'));
    expect(result.getText()).toEqual('hello');
  });
});