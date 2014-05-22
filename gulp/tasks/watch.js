'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');

// Watch
gulp.task('watch', ['connect', 'serve'], function () {
  var server = livereload();
    // Watch for changes in `app` folder
    gulp.watch([
        'app/**/*.html',
        'app/less/**/*.less',
        'app/scripts/**/*.js',
        'app/images/**/*',
        '.tmp/**/*'
    ]).on('change', function(file) {
      server.changed(file.path);
    });

    // Watch .less files
    gulp.watch('app/less/**/*.less', ['styles']);

    // Watch .js files
    gulp.watch('app/scripts/**/*.js', ['browserify']);

    // Watch templates
    gulp.watch('app/scripts/templates/**/*.hbs', ['browserify']);

    // Watch image files
    gulp.watch('app/images/**/*', ['images']);

    // Watch .html files
    gulp.watch('app/**/*.html', ['html']);
});
