describe('color CRUD', function () {
  it('should allow you to create a color', function () {
    browser.get('/');
    element(by.linkText('Colors')).click();
    expect(browser.getCurrentUrl()).toContain('/colors');
    element(by.model('color.name')).sendKeys('Orange');
    element(by.model('color.saturation')).sendKeys(80);
    element(by.model('color.wavelength')).sendKeys(510);
    $('input[type="submit"]').click();
    expect(browser.getCurrentUrl()).toContain('/colors');
    expect($('li').getText()).toContain('Orange');
  });
});