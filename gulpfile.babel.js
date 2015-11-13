var gulp = require('gulp');
var gutil = require("gulp-util");
var uglify = require('gulp-uglify');
var webpack = require('webpack');
var clean = require('gulp-clean');
var jasmine = require('gulp-jasmine');
var console = require('better-console');

var assetsPath  = 'frontend/components/**/*.jsx';
var destPath = './frontend/dist';
var specsPath = './frontend/specs/**/*_spec.js';
var webpackConfig = require('./webpack.config.js');
var jasmineConfig = require('./jasmine.config.js');

gulp.task('default',
  ['development']
);

//-----------------------------------

gulp.task('test', ['jasmine']);

gulp.task('development', function () {
  gulp.watch([assetsPath, specsPath], ['webpack', 'jasmine'])
});

gulp.task('production', function () {
  // Transpile and Minify
});

//-----------------------------------

gulp.task('clean-build', function (cb) {
  gulp.src(destPath + '/*')
    .pipe(clean());
  cb();
});

gulp.task('jasmine', function () {
  console.clear();
  gulp.src(specsPath)
    .pipe(jasmine(jasmineConfig))
});

gulp.task("webpack", ['clean-build'], function(callback) {
  webpack(
    webpackConfig, function(err, stats) {
      if(err) {throw new gutil.PluginError("webpack", err)}
      callback();
    }
  );
});