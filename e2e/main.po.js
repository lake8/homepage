module.exports = function() {

  this.brand = element(by.css('.search__brand'));
  this.searchInput = element(by.css('.search__text input'));
  this.searchButton = element(by.css('.search__text button'));

  this.get = function() {
    browser.get('http://localhost:8888');
  };
};
