var gulp = require('gulp'); //主文件
var gutil = require('gulp-util');
var sftp = require('gulp-sftp');

gulp.task('sftp', function() {
  var path = '/var/develop/service/app/public/doc';
  return gulp.src(['./_book/**'])
    .pipe(sftp({
      host: '101.201.39.135',
      user: 'root',
      pass: 'ue@9*$7ch1)*#!kPH',
      remotePath: path
    }))
    .pipe(gutil.noop());
});