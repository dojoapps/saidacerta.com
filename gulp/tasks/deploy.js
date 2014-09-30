'use strict';

var gulp = require('gulp'),
    args = require('yargs').argv,
    $ = require('gulp-load-plugins')();

gulp.task('deploy', function () {
   return gulp.src('./dist/**')
        .pipe($.s3({
          key: args.awsAccessKey || process.env.AWS_ACCESS_KEY,
          secret: args.awsSecretKey || process.env.AWS_SECRET_KEY,
          bucket: 'www.saidacerta.com',
          region: 'us-east-1'
        }));
});
