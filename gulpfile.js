var gulp = require('gulp');
var uglify = require('gulp-uglify');
var webpack = require('gulp-webpack');
var clean = require('gulp-clean');

var assetsPath  = './frontend/components/**/*.jsx';
var destPath = './frontend/dist';
var webpackConfig = require('./webpack.config.js');

gulp.task('default',
  ['development']
);

//-----------------------------------

gulp.task('test', function () {
  // Transpile and run tests
});

gulp.task('development', ['transpile'], function () {
  gulp.watch(assetsPath, ['transpile'])
});

gulp.task('production', function () {
  // Transpile and Minify
});


//-----------------------------------

gulp.task('transpile', ['clean-build'], function () {
  gulp.src(assetsPath)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(destPath))
});

gulp.task('clean-build', function () {
  gulp.src(destPath)
    .pipe(clean())
});