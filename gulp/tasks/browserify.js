'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
// var handleErrors = require('../util/handleErrors');
var source = require('vinyl-source-stream');

var libs = [
  'scrollReveal'
];

// Vendor
gulp.task('vendor', function() {
  return browserify()
    .require('./app/bower_components/scrollReveal.js/dist/scrollReveal.js', { expose: 'scrollReveal'} )
    .bundle({debug: true})
    .pipe(source('vendor.js'))
    .pipe(gulp.dest('.tmp/scripts/'));
});

// Browserify
gulp.task('browserify', function() {
  return browserify('./app/scripts/main.js')
    .external(libs)
    .transform(require('hbsfy'))
    .bundle({debug: true})
    .pipe(source('main.js'))
    .pipe(gulp.dest('.tmp/scripts/'));
});

gulp.task('scripts', ['vendor','browserify']);
