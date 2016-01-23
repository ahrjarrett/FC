var gulp = require('gulp'),
		connect = require('gulp-connect');

var htmlSources = [
	'index.html',
	'html/pricing.html'
];
var jsSources = [
	'js/script.js'
];
var cssSources = [
	'css/style.css',
	'css/menu.css',
	'css/modules.css'
];

gulp.task('connect', function (){
	connect.server({
		root: '.',
		livereload: true
	});
});

gulp.task('html', function (){
	gulp.src(htmlSources)
		.pipe(connect.reload());
});
gulp.task('js', function (){
	gulp.src(jsSources)
		.pipe(connect.reload());
});
gulp.task('css', function (){
	gulp.src(cssSources)
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(htmlSources, ['html']);
	gulp.watch(cssSources, ['css']);
	gulp.watch(jsSources, ['js']);
});

gulp.task('default', ['connect', 'watch']);
