describe('Homepage', function() {

  var MainPage = require('./main.po.js');
  var page = new MainPage();
  page.get();

  xit('should display title', function() {
    expect(page.brand.getText()).toEqual('Ocean8');
  });

  xit('should display search input with placeholder', function() {
    expect(page.searchInput.getAttribute('placeholder')).toEqual('Ask something...');
  });

  xit('should display search button with search icon class', function() {
    expect(page.searchButton.getAttribute('class')).toContain('glyphicon-search');
  });

});
