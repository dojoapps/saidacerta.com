'use strict';

var config = require('../config');
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

// Styles
gulp.task('styles', function () {
  return gulp.src('app/less/app.less')
    .pipe($.less({
      style: 'expanded',
      loadPath: [config.bower]
    }))
    //.pipe($.uncss({ html: ['app/index.html'], ignore: ['*\.in']}))
    .pipe($.autoprefixer('last 1 version'))
    .pipe(gulp.dest('.tmp/styles'))
    .pipe($.size());
});
