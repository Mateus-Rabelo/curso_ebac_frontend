const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass(){
    return gulp.src('./Source/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build'));
}