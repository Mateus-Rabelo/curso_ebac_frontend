import gulp from 'gulp';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import rename from 'gulp-rename';

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
export function styles() {
    return gulp.src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.styles.dest));
    }

  // Tarefa de compressão de imagens
    export function images() {
    return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
    }

  // Tarefa de compressão de código JavaScript
    export function scripts() {
    return gulp.src(paths.scripts.src)
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.scripts.dest));
  }
  
  // Tarefa para assistir alterações nos arquivos
  export function watch() {
    gulp.watch(paths.styles.src, styles);
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.images.src, images);
  }
  
  // Definir tarefas padrão e nomeadas
  const build = gulp.series(gulp.parallel(styles, images, scripts));
  const defaultTask = gulp.series(build, watch);
  
  // Exportar tarefas
  export { build, defaultTask as default };
