xdescribe('Homepage', function() {

  var MainPage = require('./main.po.js');
  var page = new MainPage();
  page.get();

  it('should display title', function() {
    expect(browser.getTitle()).toEqual('Ocean8');
  });

  it('should display brand name', function() {
    expect(page.brand.getText()).toEqual('Ocean8');
  });

  it('should display a submit button', function() {
    expect(page.email.getAttribute('type')).toEqual('email');
    expect(page.email.getAttribute('name')).toEqual('EMAIL');
  });

  it('should display a submit button', function() {
    expect(page.btn.getAttribute('value')).toEqual('sign up');
    expect(page.btn.getAttribute('type')).toEqual('submit');
  });

});
