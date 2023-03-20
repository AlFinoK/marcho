const { src, dest, watch, parallel, series } = require('gulp')

const scss = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')
const del = require('del')
const browserSync = require('browser-sync').create()

const styles = () => {
  return src([
    'node_modules/swiper/swiper-bundle.min.css',
    'app/scss/style.scss',
  ])
    .pipe(concat('style.min.css'))
    .pipe(scss({ outputStyle: 'compressed' }))
    .pipe(dest('app/css'))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
      })
    )
    .pipe(browserSync.stream())
}

const scripts = () => {
  return src(['node_modules/swiper/swiper-bundle.min.js', 'app/js/main.js'])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

const images = () => {
  return src('app/images/**/*.*')
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest('dist/images'))
}

const build = () => {
  return src(['app/**/*.html', 'app/css/style.min.css', 'app/js/main.min.js'], {
    base: 'app',
  }).pipe(dest('dist'))
}

const clean = () => {
  return del('dist')
}

const watching = () => {
  watch(['app/scss/**/*.scss'], styles)
  watch(['app/js/**/*.js', '!app/js/main.min.js'], scripts)
  watch(['app/**/*.html']).on('change', browserSync.reload)
}

const browsersync = () => {
  browserSync.init({
    server: {
      baseDir: 'app/',
    },
    notify: false,
  })
}

exports.styles = styles
exports.images = images
exports.scripts = scripts
exports.browsersync = browsersync
exports.watching = watching
exports.clean = clean
exports.build = series(clean, images, build)
exports.default = parallel(styles, scripts, browsersync, watching)
