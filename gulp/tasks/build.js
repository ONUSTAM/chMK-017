// @file build.js
var gulp = require('gulp');
var runSequence = require('run-sequence');

// gulp.task('build', ['webpack', 'copy', 'encoding']);
gulp.task('build', function(callback) {

  console.log('runSequence');

  return runSequence(
    // ['webpack', 'copy', 'encoding'],
    ['webpack', 'copy'],
    callback
  );
});
