(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], function () {
      return factory();
    });
  } else if (typeof exports !== 'undefined') {
    module.exports = factory();
  } else {
    root.marionette.debug = factory();
  }

}(this, function () {
  'use strict';

  // code goes here
  var marionette.debug = function (options) {

  };

  return marionette.debug;
}));
