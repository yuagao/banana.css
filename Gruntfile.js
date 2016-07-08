module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'dist/banana.css' : 'src/banana.scss'
				}
			}
		},

		compass: {
			dist: {
				options: {
					sassDir: 'src',
					cssDir: 'dist'
				}
			}
		},

		watch: {
			css: {
				files: 'src/banana.scss',
				tasks: ['compass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.registerTask('default',['watch']);
}
