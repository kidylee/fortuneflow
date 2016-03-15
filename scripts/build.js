var gulp = require('gulp');
var jetpack = require('fs-jetpack');

var projectDir = jetpack;
var srcDir = projectDir.cwd('./src');
var destDir = projectDir.cwd('./dist');


var copyTask = function () {
    srcDir.copy('package.json', destDir.path('package.json'), { overwrite: true });
};


gulp.task('clean', function(callback) {
    return destDir.dirAsync('.', { empty: true });
});


gulp.task('copy',['clean'], copyTask);