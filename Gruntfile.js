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

    // /////////////////////////////////////////////////
    // Watch
    // /////////////////////////////////////////////////

    // Make life easier
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep', 'bower']
      },
      js: {
        files: [
          '<%= paths.app %>/js/**/*.js',
          '!<%= paths.app %>/js/test/**/*.js'
        ],
        tasks: ['jsbeautifier', 'newer:jscs', 'newer:jshint:all',
          'karma:unit'],
        options: {
          livereload: true
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      php: {
        files: ['{app,views,workbench}/**/*.php'],
        tasks: ['phpunit']
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

    // Settings for grunt-bower-requirejs
    bower: {
      app: {
        rjsConfig: '<%= paths.app %>/js/main.js',
        options: {
          exclude: ['requirejs', 'json3', 'es5-shim', 'modernizr',
            'font-awesome/fonts/*']
        }
      },
      test: {
        rjsConfig: '<%= paths.app %>/js/test/test-main.js',
        options: {
          exclude: ['requirejs', 'json3', 'es5-shim', 'modernizr',
            'font-awesome/fonts/*']
        }
      }
    },

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
        '!<%= paths.app %>/test/**/*.js'
      ],
      test: {
        options: {
          jshintrc: '<%= paths.app %>/js/test/.jshintrc'
        },
        src: ['test/spec/**/*.js']
      }
    },

    // /////////////////////////////////////////////////
    // Utilities
    // /////////////////////////////////////////////////

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
      dev: ['scripts', 'styles'],
      vagrant: ['vagrant_commands:homestead', 'scripts', 'styles']
    },

    replace: {
      test: {
        src: '<%= paths.app %>/test/test-main.js',
        overwrite: true,
        replacements: [{
          from: /#replace:rjsconfig[^#]*#endreplace/,
          to: function () {
            var newStuff = '';

            newStuff += require('fs')
              .readFileSync(grunt.template.process(
                '<%= paths.app %>') + '/js/main.js')
              .toString()
              .match(/#replace:rjsconfig[^#]*#endreplace/);

            grunt.log.writeln('newStuff');

            return newStuff;
          }
        }]
      }
    },

    // Copies remaining files to places other tasks can use
    // copy: {
    //   dist: {
    //     files: [{
    //       expand: true,
    //       dot: true,
    //       cwd: '<%= paths.app %>',
    //       dest: '<%= paths.dist %>',
    //       src: [
    //         '*',
    //         '!.gitignore'
    //       ]
    //     }, {
    //       expand: true,
    //       cwd: '<%= paths.app %>/css',
    //       dest: '<%= paths.dist %>/css',
    //       src: ['**/*']
    //     }, {
    //       expand: true,
    //       cwd: '.',
    //       dest: '<%= yeoman.dist %>',
    //       src: ['bower_components/requirejs/*']
    //     }, {
    //       expand: true,
    //       cwd: '.tmp/images',
    //       dest: '<%= yeoman.dist %>/images',
    //       src: ['generated/*']
    //     }, {
    //       expand: true,
    //       cwd: 'bower_components/bootstrap/dist',
    //       src: 'fonts/*',
    //       dest: '<%= yeoman.dist %>'
    //     }]
    //   },
    //   styles: {
    //     expand: true,
    //     cwd: '<%= yeoman.app %>/styles',
    //     dest: '.tmp/styles/',
    //     src: '{,*/}*.css'
    //   }
    // },

    // /////////////////////////////////////////////////
    // Servers
    // /////////////////////////////////////////////////

    // Start Vagrant
    vagrant_commands: {
      homestead: {
        commands: [
          ['halt'],
          ['up', '--provision']
        ]
      }
    },

    // PHP Built-in server
    php: {
      watch: {
        options: {
          router: 'server.php',
          open: true,
          port: 9000
        }
      },
      test: {
        options: {
          router: 'server.php',
          port: 9001
        }
      }
    },

    // /////////////////////////////////////////////////
    // Testing
    // /////////////////////////////////////////////////

    // Run PHPUnit tests
    phpunit: {
      options: {
        bin: 'vendor/bin/phpunit',
        configuration: 'phpunit.xml'
      },
      app: {
        dir: 'app/tests'
      }
    },

    // Run Karma tests
    karma: {
      unit: {
        configFile: 'karma-unit.conf.js',
        singleRun: true
      },
      e2e: {
        configFile: 'karma-e2e.conf.js',
        singleRun: true
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

  grunt.registerTask('serve', function (target) {
    if ('vagrant' === target) {
      return grunt.task.run(['concurrent:vagrant', 'watch']);
    }

    grunt.task.run([
      'concurrent:dev',
      'php:watch',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'phpunit',
    'bower:app',
    'replace:test',
    'clean:server',
    'php:test',
    'karma:unit'
  ]);
};
