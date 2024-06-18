// Importar os módulos necessários
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');

// Caminhos dos arquivos
const paths = {
    styles: {
    src: './source/style.scss',
    dest: './build'
    },
    scripts: {
    src: './source/*.js',
    dest: './build'
    },
    images: {
    src: './images/*.{png,jpg}',
    dest: '.build'
    }
};

// Tarefa de compilação do SASS
function styles() {
    return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.styles.dest));
}

// Tarefa de compressão de imagens
function images() {
    return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

// Tarefa de compressão de código JavaScript
function scripts() {
    return gulp.src(paths.scripts.src)
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scripts.dest));
}

// Tarefa para assistir alterações nos arquivos
function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
}

// Definir tarefas padrão e nomeadas
gulp.task('styles', styles);
gulp.task('images', images);
gulp.task('scripts', scripts);
gulp.task('watch', watch);

// Definir a tarefa build como uma série de tarefas paralelas
gulp.task('build', gulp.series(gulp.parallel(styles, images, scripts)));

// Definir a tarefa default para executar build e watch
gulp.task('default', gulp.series('build', 'watch'));
