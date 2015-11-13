var gulp = require('gulp');
var gutil = require("gulp-util");
var uglify = require('gulp-uglify');
var webpack = require('webpack');
var clean = require('gulp-clean');
var jasmine = require('gulp-jasmine');
var console = require('better-console');

var assetsPath  = 'react_views/**/*.jsx';
var specsPath = './spec/components/**/*_spec.js';
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

gulp.task('jasmine', function () {
  console.clear();
  gulp.src(specsPath)
    .pipe(jasmine({fullStackTrace: true}))
});

gulp.task("webpack", function(callback) {
  webpack(
    webpackConfig, function(err, info) {
      if(err) {throw new gutil.PluginError("webpack", err)}
      callback();
    }
  );
});