/* jshint node: true */
// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function (config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
      {pattern: 'public/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap/*.js', included: false},
      {pattern: 'public/bower_components/jquery/dist/jquery.js', included: false},
      {pattern: 'public/bower_components/angular/angular.js', included: false},
      {pattern: 'public/bower_components/angular-mocks/angular-mocks.js', included: false},
      {pattern: 'public/bower_components/modernizr/**/*.js', included: true},
      // {pattern: 'bower_components/angular-resource/angular-resource.js', included: false },
      // {pattern: 'bower_components/angular-cookies/angular-cookies.js', included: false },
      // {pattern: 'public/bower_components/angular-sanitize/angular-sanitize.js', included: false },
      // {pattern: 'bower_components/angular-route/angular-route.js', included: false },
      // {pattern: 'bower_components/angular-animate/angular-animate.js', included: false },
      // {pattern: 'bower_components/angular-touch/angular-touch.js', included: false },
      // {pattern: 'js/*.js', included: false },
      {pattern: 'public/js/**/*.js', included: false },
      {pattern: 'public/test/spec/**/*.js', included: false },
      // http://karma-runner.github.io/0.10/plus/requirejs.html
      'public/test/test-main.js'
    ],

    // list of files / patterns to exclude
    exclude: [
      'public/js/main.js'
    ],

    // web server port
    port: 9876,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
