var gulp = require('gulp')
var myth = require('gulp-myth')
var concat = require('gulp-concat')
var plumber = require('gulp-plumber')
var prefix = require('gulp-autoprefixer')
var browserify = require('browserify')
var stream = require('vinyl-source-stream')

var scripts = ['./src/bundle.js']
var styles = [
    './bower_components/nouislider/distribute/jquery.nouislider.min.css'
  , './src/bundle.css'
]

gulp.task('scripts', function(){
  return browserify(scripts)
        .bundle()
        .pipe(plumber())
        .pipe(stream('all.js'))
        .pipe(gulp.dest('./dist'))
})

gulp.task('styles', function(){
  return gulp.src(styles)
        .pipe(myth())
        .pipe(plumber())
        .pipe(concat('all.css'))
        .pipe(prefix({
          browsers: ['> 2%']
        }))
        .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function(){
  var styleWatcher = gulp.watch(styles, ['styles'])
  var scriptWatcher = gulp.watch(scripts, ['scripts'])
})

gulp.task('default', ['scripts', 'styles', 'watch'])
