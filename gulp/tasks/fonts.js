'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Images
gulp.task('fonts', function() {
  return gulp.src('**/*.{eot,svg,ttf,woff}')
    .pipe($.flatten())
    .pipe(gulp.dest('dist/fonts'))
    .pipe(gulp.dest('.tmp/fonts'))
    .pipe($.size());
});
