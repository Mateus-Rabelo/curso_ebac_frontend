const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function compilaSass(){
    return gulp.src('./Source/style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./Build'));
}

function funcaoPadrao(callback) {
    console.log("Executando via Gulp");
    callback();
}

exports.default = funcaoPadrao;
exports.sass = compilaSass
