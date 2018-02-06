if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'jekyll-bootstrap4-showcase'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'jekyll-bootstrap4-showcase'.");
}
this['jekyll-bootstrap4-showcase'] = function (_, Kotlin) {
  'use strict';
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function main(args) {
    var message = 'Hello JavaScript!';
    println(message);
  }
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('jekyll-bootstrap4-showcase', _);
  return _;
}(typeof this['jekyll-bootstrap4-showcase'] === 'undefined' ? {} : this['jekyll-bootstrap4-showcase'], kotlin);
