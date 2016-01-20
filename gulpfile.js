"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream'); // Use conventional text streams with Gulp
var concat = require('gulp-concat');
var eslint = require('gulp-eslint');

var config = {
  port: 9005,
  devBaseUrl: 'http://localhost',
  paths: {
      html: './src/*.html',
      js: './src/**/*.js',
      css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/build/toastr.css'
        ],
      images: './src/images/*',
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

gulp.task('js', function () {
  browserify(config.paths.mainJs)
    .transform(reactify)
    .bundle()
    .on('error', console.error.bind(console)) // Writes the erros to the console.
    .pipe(source('bundle.js'))
    .pipe(gulp.dest(config.paths.dist + '/scripts'))
    .pipe(connect.reload()); // Reloads the server.
});

gulp.task('css', function () {
  gulp.src(config.paths.css)
    .pipe(concat('app.css'))
    .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('images', function () {
  gulp.src(config.paths.images)
    .pipe(gulp.dest(config.paths.dist + '/images'))
    .pipe(connect.reload());

  gulp.src('./src/favicon.ico')
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('eslint', function() {
	return gulp.src(config.paths.js)
		.pipe(eslint({config: 'eslint.config.json'}))
		.pipe(eslint.format());
});

// Watch for changes.
gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['htmlToDev']);
    gulp.watch(config.paths.js, ['js', 'eslint']);
});

// Default gulp task.
gulp.task('default', ['htmlToDev', 'js', 'css', 'images', 'eslint', 'open', 'watch']);
