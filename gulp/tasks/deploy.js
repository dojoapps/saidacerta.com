'use strict';

var gulp = require('gulp'),
    deploy = require('gulp-gh-pages');

gulp.task('deploy', function () {
   return gulp.src('./dist/**/*')
        .pipe(deploy('https://github.com/dojoapps/saidacerta.com.git'));
});
