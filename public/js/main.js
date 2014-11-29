// jscs:disable maximumLineLength
require.config({
  paths: {
    affix: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/affix',
    alert: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/alert',
    button: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/button',
    carousel: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/carousel',
    collapse: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/collapse',
    dropdown: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/dropdown',
    tab: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tab',
    transition: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/transition',
    scrollspy: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/scrollspy',
    modal: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/modal',
    tooltip: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/tooltip',
    popover: '../bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/popover',
    jquery: '../bower_components/jquery/dist/jquery',
    angular: '../bower_components/angular/angular'
  },
  packages: [

  ],
  shim: {
    affix: {
      deps: [
        'jquery'
      ]
    },
    alert: {
      deps: [
        'jquery'
      ]
    },
    button: {
      deps: [
        'jquery'
      ]
    },
    carousel: {
      deps: [
        'jquery'
      ]
    },
    collapse: {
      deps: [
        'jquery',
        'transition'
      ]
    },
    dropdown: {
      deps: [
        'jquery'
      ]
    },
    tab: {
      deps: [
        'jquery'
      ]
    },
    transition: {
      deps: [
        'jquery'
      ]
    },
    scrollspy: {
      deps: [
        'jquery'
      ]
    },
    modal: {
      deps: [
        'jquery'
      ]
    },
    tooltip: {
      deps: [
        'jquery'
      ]
    },
    popover: {
      deps: [
        'jquery',
        'tooltip'
      ]
    },
    angular: {
      deps: [
        'jquery'
      ],
      exports: 'angular'
    }
  }
});
// jscs:enable maximumLineLength

require([
  'this'
], function () {
  'use strict';

  return null;
});
