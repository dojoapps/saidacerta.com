'use strict';

var gulp = require('gulp'),
    deploy = require('gulp-gh-pages');

gulp.task('deploy', ['clean'], function () {
  return gulp.start('build', function () {
   return gulp.src('./dist/**/*')
        .pipe(deploy('https://github.com/dojoapps/saidacerta.com.git'));
  })
});
