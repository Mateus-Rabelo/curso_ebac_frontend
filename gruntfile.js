module.exports = function(grunt) {

    // Configuração do projeto
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
  
      // Compilar LESS
    less: {
        development: {
        options: {
            paths: ["assets/css"]
        },
        files: {
            "./build/main.css": "./src/style.less"
        }
        }
    },

      // Minificar JavaScript
    uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
        src: './src/source.js',
        dest: './build/main.js'
        }
    }
    });

    // Carregar plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registrar tarefas
    grunt.registerTask('default', ['less', 'uglify']);

};
