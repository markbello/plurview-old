// Basic Gulp File
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var notify = require("gulp-notify");
var bower = require('gulp-bower');
 
var config = {
    fontawesomeDir: './bower_components/font-awesome',
    publicDir: './public',
    bowerDir: './bower_components'
}
 
gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});
 
gulp.task('fonts', function() {
    return gulp.src(config.bowerDir + '/font-awesome/fonts/**.*')
        .pipe(gulp.dest('./public/fonts'));
});
 
gulp.task('css', function() {
    return gulp.src('./public/sass/style.scss')
        .pipe(sass({
            includePaths: [config.fontawesomeDir + '/scss'],
        }))
        .pipe(gulp.dest(config.publicDir + '/stylesheets'));
});
 
// Watch task
gulp.task('watch',function() {
    gulp.watch('./public/sass/**/*.scss', ['css']);
});
 
gulp.task('default', ['bower', 'fonts', 'css']);