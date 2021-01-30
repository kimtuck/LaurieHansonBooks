// Creating a wrapper
module.exports = function(grunt){

    // Initializing configuration objects
    grunt.initConfig({

        // Reading 'package.json' so that we can use setting given there
        pkg : grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'css/site.css': './Sass/site.scss'
                }
            }
        },
        watch: {
            sass: {
                files: './Sass/*.*',
                tasks: ['sass'],
                options: {
                    spawn:false,
                    event:['all']
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask( 'default', [ 'watch' ] );
}