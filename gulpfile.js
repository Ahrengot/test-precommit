var gulp = require('gulp');
var gulpFilter = require('gulp-filter');
var jshint = require('gulp-jshint');

var guppy = require('git-guppy')(gulp);

gulp.task('pre-commit', function () {
  return gulp.src(guppy.src('pre-commit'))
    .pipe(gulpFilter(['*.js']))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'));
});