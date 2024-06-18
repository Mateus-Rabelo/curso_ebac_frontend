const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass(){
    return gulp.src('./Source/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./Build'));
}



