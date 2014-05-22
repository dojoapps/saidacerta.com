'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

// Browserify
gulp.task('browserify', function() {
  return browserify('./app/scripts/main.js')
    .require('jquery')
    .require('./app/bower_components/scrollReveal.js/dist/scrollReveal.js', { expose: 'scrollReveal'} )
    .transform(require('hbsfy'))
    .bundle({debug: false})
    .pipe(source('main.js'))
    .pipe(gulp.dest('.tmp/scripts/'));
});

gulp.task('scripts', ['browserify']);
