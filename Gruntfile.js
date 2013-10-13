module.exports = function (grunt) {

    grunt.loadNpmTasks("grunt-karma");

    grunt.initConfig({
        karma  :{
            test : {
                configFile : 'karma.conf.js',
                singleRun: true
            },
            dev : {
                configFile : 'karma.conf.js'
            },
            ci : {
                configFile : 'karma.conf.js',
                singleRun: true,
                browsers: ['PhantomJS']
            }
        }
    });

    grunt.registerTask("test", "karma:test");
    grunt.registerTask("dev", "karma:dev");
    grunt.registerTask("ci", "karma:ci");
};