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
            "path/to/result.css": "path/to/source.less"
        }
        }
    },

      // Minificar JavaScript
    uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        build: {
        src: 'path/to/source.js',
        dest: 'path/to/result.min.js'
        }
    }
    });

    // Carregar plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registrar tarefas
    grunt.registerTask('default', ['less', 'uglify']);

};
