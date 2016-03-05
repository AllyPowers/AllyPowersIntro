var gulp = require('gulp');
var gutil = require('gulp-util');
var browserify = require('browserify');
var watchify = require('watchify');
var cacheify = require('cacheify');
var levelup = require('levelup');
var source = require('vinyl-source-stream');
var less = require('gulp-less');
var connect = require('gulp-connect');
var LessPluginAutoPrefix = require('less-plugin-autoprefix');
var db = levelup('./.cache');

var srcRoot = 'src';

gulp.task('connect', function () {
    connect.server({
        root: [srcRoot],
        port: 3002,
        livereload: true,
        fallback: 'src/index.html'
    });
});

gulp.task('watch-html', function () {
    gulp.watch(srcRoot + '/**/*.html', function () {
        return gulp.src(srcRoot + '/**/*.html')
            .pipe(connect.reload());
    });
});

gulp.task('watch-js', function () {
    gulp.watch(srcRoot + '/**/*.js', function () {
        return gulp.src(srcRoot + '/**/*.js')
            .pipe(connect.reload());
    });
});

gulp.task('watch', ['watch-html','watch-js'])
gulp.task('default', ['connect', 'watch']);
