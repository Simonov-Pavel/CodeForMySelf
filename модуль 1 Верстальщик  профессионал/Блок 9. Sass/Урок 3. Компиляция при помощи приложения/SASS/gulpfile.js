const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const browseSync = require('browser-sync').create();
const sourceMaps = require('gulp-sourcemaps');

gulp.task('sass', function(){
    return gulp.src('scss/style.scss')
        .pipe(plumber())
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(sourceMaps.write())
        .pipe(gulp.dest('build/css'))
        .pipe(browseSync.reload({stream: true}));
});
gulp.task('html', function(){
    return gulp.src('*.html')
        .pipe(gulp.dest('build'))
        .pipe(browseSync.reload({stream: true}));
});

gulp.task('serve', ['html', 'sass'], function(){
    browseSync.init({
        server: 'build'
    });

    gulp.watch('scss/**/*.scss', gulp.parallel('sass'));
    gulp.watch('*.html', gulp.parallel('html'));
});