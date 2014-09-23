var gulp = require('gulp')
var browserify = require('browserify')
var stream = require('vinyl-source-stream')

gulp.task('browserify', function(){
  return browserify('./bundle.js')
        .bundle()
        .pipe(stream('all.js'))
        .pipe(gulp.dest('./'))
})

gulp.task('default', ['browserify'])
