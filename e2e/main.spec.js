describe('Homepage', function() {

  var MainPage = require('./main.po.js');
  var page = new MainPage();
  page.get();

  it('should display title', function() {
    expect(page.brand.getText()).toEqual('Ocean8');
  });

  it('should display search input with placeholder', function() {
    expect(page.searchInput.getAttribute('placeholder')).toEqual('Ask something...');
  });

  it('should display search button with search icon class', function() {
    expect(page.searchButton.getAttribute('class')).toContain('glyphicon-search');
  });

});
