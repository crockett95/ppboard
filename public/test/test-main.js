var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    // Removed "Spec" naming from files
    if (/spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

// #replace:rjsconfig
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
    angular: '../bower_components/angular/angular',
    'angular-mocks': '../bower_components/angular-mocks/angular-mocks',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angular-scenario': '../bower_components/angular-scenario/angular-scenario',
    lodash: '../bower_components/lodash/dist/lodash.compat',
    'requirejs-text': '../bower_components/requirejs-text/text',
    restangular: '../bower_components/restangular/dist/restangular',
    'ui-router': '../bower_components/ui-router/release/angular-ui-router'
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
    },
    'angular-mocks': {
      deps: [
        'angular'
      ]
    }
  }
});
// #endreplace

requirejs.config({
  baseUrl: '/base/public/js',
  deps: tests,
  callback: window.__karma__.start
});
