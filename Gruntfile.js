module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  	pkg: grunt.file.readJSON('package.json'),
  	concat: {
  		options: {
  			separator: ';',
  		},
  		dist: {
  			src: ['scripts/globals.js',
              'scripts/drawIsochrones.js',
              'scripts/getDirections.js',
              'scripts/directionsearch.js',
              'scripts/isochrone_Step.js',
              'scripts/sortPoints2Polygon.js',
              'scripts/getCirclePoints.js',
              'scripts/placeMarker.js'
       ],
       dest: 'build/<%= pkg.name %>.js',
     },
   },
   uglify: {
    options: {
     banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
   },
   build: {
     src: 'js/<%= pkg.name %>.js',
     dest: 'static/build/<%= pkg.name %>.min.js'
   }
 }

});

  // Load the plugins
  grunt.loadNpmTasks('grunt-install-dependencies');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
	//grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
	grunt.registerTask('default', ['install-dependencies','concat']);
  //grunt.registerTask('default', ['concat']);
};