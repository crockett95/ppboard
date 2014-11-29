/* jshint node: true, camelcase: false */
module.exports = function (grunt) {
  'use strict';

  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  var appConfig = {
    app: 'public',
    dist: 'html'
  };

  grunt.initConfig({
    paths: appConfig,
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep', 'bower']
      },
      js: {
        files: '<%= paths.app %>/js/**/*.js',
        tasks: ['jsbeautifier', 'newer:jscs', 'newer:jshint:all'],
        options: {
          livereload: true
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          '{app,views,workbench}/**/*.php',
          '<%= paths.app %>/css/{,*/}*.css',
          '<%= paths.app %>/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      sass: {
        files: ['**/*.scss', '**/*.sass'],
        task: ['csscomb:sass', 'newer:sass:dev']
      }
    },

    // /////////////////////////////////////////////////
    // Styles
    // /////////////////////////////////////////////////

    // CSSComb (makes it pretty)
    csscomb: {
      options: {
        config: '.csscomb.json'
      },
      sass: {
        expand: true,
        cwd: 'public/scss/',
        src: ['**/*.{scss,sass}'],
        dest: 'public/scss'
      }
    },

    // Compile Sass
    sass: {
      options: {
        unixNewlines: true,
        loadPath: ['public/bower_components']
      },
      dev: {
        options: {
          sourcemap: 'auto',
          style: 'nested'
        },
        files: [{
          expand: true,
          cwd: '<%= paths.app %>/scss',
          src: ['*.{scss,sass}'],
          dest: '<%= paths.app %>/css',
          ext: '.css'
        }]
      }
    },

    // /////////////////////////////////////////////////
    // JavaScript
    // /////////////////////////////////////////////////

    // JavaScript Beautifier
    jsbeautifier: {
      all: {
        src: [
              'Gruntfile.js',
              '<%= paths.app %>/js/**/*.js'
            ],
        options: {
          config: '.jsbeautifyrc'
        }
      }
    },

    // JavaScript Code Style
    jscs: {
      src: ['public/js/**/*.js', 'Gruntfile.js'],
      options: {
        config: true
      }
    },

    // JavaScript Linting
    jshint: {
      options: {
        jshintrc: true,
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= paths.app %>/js/**/*.js',
        '!<%= paths.app %>/js/tests/**/*.js'
      ],
      test: {
        options: {
          jshintrc: '<%= paths.app %>/js/test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Settings for grunt-bower-requirejs
    bower: {
      app: {
        rjsConfig: '<%= paths.app %>/js/main.js',
        options: {
          exclude: ['requirejs', 'json3', 'es5-shim', 'modernizr',
            'font-awesome/fonts/*']
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= paths.dist %>/**/*',
            '!<%= paths.dist %>/.git*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Automatically inject Bower components into the app
    wiredep: {
      // app: {
      //   src: ['<%= paths.app %>/index.html'],
      //   ignorePath:  /\.\.\//
      // },
      sass: {
        src: ['<%= paths.app %>/scss/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Queue up tasks concurrently
    concurrent: {
      dev: ['scripts', 'styles', 'vagrant_commands:homestead']
    },

    // Start Vagrant
    vagrant_commands: {
      homestead: {
        commands: [
          ['halt'],
          ['up', '--provision']
        ]
      }
    }
  });

  grunt.registerTask('scripts', [
    'bower:app',
    'jsbeautifier',
    'jscs',
    'jshint:all'
  ]);

  grunt.registerTask('styles', [
    'wiredep:sass',
    'csscomb:sass',
    'sass:dev'
  ]);

  grunt.registerTask('default', ['concurrent:dev', 'watch']);
};
