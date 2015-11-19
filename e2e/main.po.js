module.exports = function() {

  this.brand = element(by.css('.search__brand'));

  this.email = element(by.css('#mce-EMAIL'));
  this.btn = element(by.css('#mc-embedded-subscribe'));

  this.get = function() {
    browser.get('http://localhost:8888');
  };
};
