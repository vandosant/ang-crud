describe('color CRUD', function () {
  it('should allow you to create and view a color', function () {
    browser.get('/');
    element(by.linkText('Colors')).click();
    expect(browser.getCurrentUrl()).toContain('/colors');
    element(by.model('color.name')).sendKeys('Orange');
    element(by.model('color.saturation')).sendKeys(80);
    element(by.model('color.wavelength')).sendKeys(510);
    $('input[type="submit"]').click();
    expect(browser.getCurrentUrl()).toContain('/colors');
    expect(element.all(by.css('li')).getText()).toContain('Orange');
    element(by.linkText('Orange')).click();
    expect($('h2').getText()).toContain('Color');
    var liText = element.all(by.css('li')).getText();
    expect(liText).toContain('510');
    expect(liText).toContain('80');
    expect(liText).toContain('Orange');
  });
});