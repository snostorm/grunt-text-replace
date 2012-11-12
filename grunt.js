module.exports = function (grunt) {
  "use strict";

  // Project configuration.
  grunt.initConfig({
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['grunt.js', 'tasks/**/*.js', 'test/**/*.js']
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        es5: true
      },
      globals: {}
    },
    replace: {
      example: {
        src: ['test/test.txt'],
        dest: 'test/modified/',
        replacements: [
          { from: 'Hello', to: 'Good bye' }, 
          { from: /(f|F)(o{2,100})/g, to: 'M$2' }
        ]
      },
      overwriting: {
        src: ['test/modified/test.txt'],
        overwrite: true,
        replacements: [
          { 
            from: '"localhost"', 
            to: '"www.mysite.com"' 
          },
          { 
            from: '<p>Version:</p>', 
            to: '<p>Version: <%= grunt.template.today("yyyy-mm-dd") %></p>'
          }
        ]
      }
    }
  });

  // Load local tasks.
  grunt.loadTasks('tasks');

  // Default task.
  grunt.registerTask('default', 'lint test replace');

};