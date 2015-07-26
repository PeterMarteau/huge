sassFiles = {
    'public/css/vendor.css': 'sass/_vendor.scss'
}

module.exports = function(grunt) {

grunt.initConfig({
 
   concat: {
    options: {
      separator: ';',
    },
    dist: {
      src: [
      	'bower_components/jquery/dist/jquery.js',
      	'bower_components/bootstrap/dist/js/bootstrap.js',
      	//'bower_components/ckeditor/ckeditor.js',
      	'bower_components/datatables/media/js/jquery.dataTables.js',
      	'bower_components/select2/dist/js/select2.js',
      ],
      dest: 'public/js/vendor.js',
    },
  },
  uglify: {
  	 my_target: {
      files: {
       'public/js/vendor.min.js': ['public/js/vendor.js']
      }
    }
  },
  sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: sassFiles
            },
            dist: {
                options: {
                    style: 'compressed'
                },
                files: sassFiles
            }
        },
        watch: {
            sass: {
                files: 'sass/*.scss',
                tasks: ['sass:dev']
            }
        }
  });
// Load grunt plugins.
 grunt.loadNpmTasks('grunt-autoprefixer');
 grunt.loadNpmTasks('grunt-contrib-cssmin');
 grunt.loadNpmTasks('grunt-contrib-uglify');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-contrib-concat');
 grunt.loadNpmTasks('grunt-contrib-sass');
     grunt.registerTask('buildcss', ['sass:dist']);
};