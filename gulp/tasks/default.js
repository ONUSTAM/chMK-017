// @file default.js
var gulp = require('gulp');
// var runSequence = require('run-sequence');
gulp.task('default', ['build', 'watch']);


// gulp.task('default', function(callback) {
//
//   console.log('runSequence');
//   return runSequence(
//     ['build', 'watch', 'encoding'],
//     callback
//   );
// });
