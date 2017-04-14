var gulp = require('gulp');
var convertEncoding = require('gulp-convert-encoding');
var config = require('../config').encoding;

gulp.task('encoding', function () {
  gulp.src(config.src)
    .pipe(convertEncoding({to: config.to}))
    .pipe(gulp.dest(config.outuptPath));
});
