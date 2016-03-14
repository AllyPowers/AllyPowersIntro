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
var sass = require('gulp-sass');

var srcRoot = 'src';

gulp.task('connect', function () {
    connect.server({
        root: [srcRoot],
        port: 3002,
        livereload: true,
        fallback: 'src/views/lc.html'
    });
});

// compile Sass
gulp.task('sass', function() {
    gulp.src(srcRoot + '/css/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(srcRoot + '/css'));
});

gulp.task('watch-html', function () {
    gulp.watch(srcRoot + '/**/**/*.html', function () {
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

gulp.task('watch-css', function(){
    // 监听文件变化
    gulp.watch(srcRoot + '/css/sass/*.scss', function(){
        gulp.run('sass');
        return gulp.src(srcRoot + '/css/sass/*.scss')
            .pipe(connect.reload());
    });
});

gulp.task('watch', ['watch-html','watch-js','watch-css'])
gulp.task('default', ['connect', 'watch']);



