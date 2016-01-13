"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
      html: './src/*.html',
      js: './src/**/*.js',
      css: '',
      dist: './dist',
      mainJs: './src/main.js'
  }
};

// Starts the local development server.

gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});
gulp.task('open', ['connect'], function () {
    gulp.src('./dist/index.html')
        .pipe(open({
            uri: config.devBaseUrl + ':' + config.port + '/',
            app: 'chrome'
        }));
});

// Copies the html to dev
gulp.task('htmlToDev', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

// Watch for changes.
gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['htmlToDev']);
});

// Default gulp task.
gulp.task('default', ['htmlToDev', 'open', 'watch']);
