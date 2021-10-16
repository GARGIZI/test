const gulp = require('gulp');
const gcmq = require('gulp-group-css-media-queries');

gulp.task('default', function () {
  gulp.src('src/style.css')
      .pipe(gcmq())
      .pipe(gulp.dest('dist'));
});