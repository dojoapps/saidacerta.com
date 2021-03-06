'use strict';

var config = require('../config');
var gulp = require('gulp');

// Connect
gulp.task('connect', function () {
  var connect = require('connect');
  var app = connect()
    .use(require('connect-livereload')({ port: config.livereloadPort }))
    .use('/', connect.static('.tmp'))
    .use('/', connect.static('app'))
    .use(connect.directory('app'));

  require('http').createServer(app)
    .listen(config.port)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:' + config.port);
    });
});

gulp.task('serve', ['connect', 'scripts', 'styles', 'fonts'], function () {
  require('opn')('http://localhost:' + config.port);
});

gulp.task('prod', function() {
  var connect = require('connect');
  var app = connect()
    .use('/', connect.static('dist'));

  require('http').createServer(app)
    .listen(config.port)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:' + config.port);
    });

  require('opn')('http://localhost:' + config.port);
});
